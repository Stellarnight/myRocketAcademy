//PSEUDO CODE
// Step 1: Create Deck
var makeDeck = function () {
  var suits = ["hearts", "diamonds", "clubs", "spades"];
  var cardDeck = [];
  for (var i = 0; i < suits.length; i++) {
    for (var j = 1; j < 14; j++) {
      var card = {
        name: ``,
        suit: ``,
        rank: ``
      };
      card.suit = suits[i];
      //console.log(card.suit);
      card.rank = j;
      //console.log(card.rank);
      card.name = `${j}`;
      if (card.rank == 11) {
        card.name = `Jack`;
      } else if (card.rank == 12) {
        card.name = `Queen`;
      } else if (card.rank == 13) {
        card.name = `King`;
      }
      //console.log(card.name);
      // console.log(card);
      cardDeck.push(card);
    }
  }
  //console.log(cardDeck);
  return cardDeck;
};

//Step 2: Shuffle Deck
// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};

var shuffledDeck = shuffleCards(makeDeck());

//Step 3: Start Blackjack game between Dealer and Player
//Global Variables here
var comScore = 0; //to capture the combined rank of all the cards of the computer
var playerScore = 0; //to capture the combined rank of all the cards of the player
var winRateComputer = 0;
var winRatePlayer = 0;
var drawRate = 0;
var handsComputer = []; //array to capture the individual cards of the computer
var handsPlayer = []; //array to capture the individual cards of the player
var outputPlayer = ``;
var outputComputer = ``;

//variable to generate scalable output of cards by suit and name for use in the OutputMessage
var helpfulFunctionPlayer = function () {
  outputPlayer = ``;
  for (i = 0; i < handsPlayer.length; i++) {
    outputPlayer += `, ${handsPlayer[i].name} of ${handsPlayer[i].suit}`;
  }
  return outputPlayer;
};
var helpfulFunctionComputer = function () {
  for (i = 0; i < handsComputer.length; i++) {
    outputComputer += `, ${handsComputer[i].name} of ${handsComputer[i].suit}`;
  }
  return outputComputer;
};

//determine winner function
var outcomeBlackJack = function () {
  if ((comScore > 21 && playerScore > 21) || comScore == playerScore) {
    drawRate++;
    msg =
      `Draw! <br>
    Player's hand was ` +
      helpfulFunctionPlayer() +
      `. <br>
    Computer's hand was` +
      helpfulFunctionComputer() +
      `. <br> 
    Current Player Win: ${winRatePlayer} <br> 
    Current Computer Win: ${winRateComputer} <br> 
    Current Draws: ${drawRate}`;
    //return msg;
  } else if (comScore > playerScore) {
    winRatePlayer++;
    msg =
      `Player wins with score ${playerScore}. Computer had ${comScore} <br> 
    Player's hand was ` +
      helpfulFunctionPlayer() +
      `. <br>
    Computer's hand was` +
      helpfulFunctionComputer() +
      `. <br>
    Current Player Win: ${winRatePlayer} <br> 
    Current Computer Win: ${winRateComputer} <br> 
    Current Draws: ${drawRate}`;
    //return msg;
  } else if (comScore < playerScore) {
    winRateComputer++;
    msg =
      `Computer wins with score ${comScore}. Player had ${playerScore} <br> 
    Player's hand was ` +
      helpfulFunctionPlayer() +
      `. <br>
    Computer's hand was ${handsComputer.name} of ${handsComputer.suit}. <br>
    Current Player Win: ${winRatePlayer} <br> 
    Current Computer Win: ${winRateComputer} <br> 
    Current Draws: ${drawRate}`;
    //console.log(handsPlayer);
    ///return msg;
  }
  return msg;
};

//Main Game here
var main = function (input) {
  var outputMsg = ``;
  //resets both player and computer score back to 0 at the start of each game
  comScore = 0;
  playerScore = 0;
  handsComputer = [];
  handsPlayer = [];
  //Step 4: Deal two cards each to Player and Dealer
  //issue two cards in sequence to both player and computer
  for (i = 0; i < 2; i++) {
    handsComputer.push(shuffledDeck.pop());
    handsPlayer.push(shuffledDeck.pop());
  }
  //generate combined score of all the cards in the computer's hand
  for (i = 0; i < handsComputer.length; i++) {
    comScore += handsComputer[i].rank;
  }
  //generate combined score of all the cards in the player's hand
  for (i = 0; i < handsPlayer.length; i++) {
    playerScore += handsPlayer[i].rank;
  }
  outputMsg = outcomeBlackJack();
  return outputMsg;
};

//Step 5: Check for instant blackjack and determine winner or draw
//Step 6: Check if player needs or wants to hit; if need to hit, issue 1 x card
//Step 7: Check if dealer needs or wants to hit; if need to hit, issue 1 x card
//step 8: check if anybody busts at this stage
//step 9: repeat step 6 to 8 if required
//Step 10: comapre score and output message
