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
        card.rank = 10;
      } else if (card.rank == 12) {
        card.name = `Queen`;
        card.rank = 10;
      } else if (card.rank == 13) {
        card.name = `King`;
        card.rank = 10;
      } else if (card.rank == 1) {
        card.name = `Ace`;
      }
      //console.log(card.name);
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

//Step 3: Start Blackjack game between Dealer and Player
//Global Variables here
var comScore = 0; //to capture the combined rank of all the cards of the computer
var playerScore = 0; //to capture the combined rank of all the cards of the player
var winRateComputer = 0;
var winRatePlayer = 0;
var drawRate = 0;
var handsComputer = []; //array to capture the individual cards of the computer
var handsPlayer = []; //array to capture the individual cards of the player
var gameMode = `Deal2Cards`;
var shuffledDeck = [];

//functions to generate scalable output of cards by suit and name for use in the OutputMessage
var helpfulFunctionPlayer = function () {
  var outputPlayer = ``;
  for (i = 0; i < handsPlayer.length; i += 1) {
    outputPlayer += `, ${handsPlayer[i].name} of ${handsPlayer[i].suit}`;
  }
  return outputPlayer;
};
var helpfulFunctionComputer = function () {
  var outputComputer = ``;
  for (i = 0; i < handsComputer.length; i += 1) {
    outputComputer += `, ${handsComputer[i].name} of ${handsComputer[i].suit}`;
  }
  return outputComputer;
};

//Helper Function for Initial (first two cards) Win Condition
var checkForBlackjack = function () {
  var msg = ``;
  if (comScore == 21 && playerScore != 21) {
    winRateComputer++;
    msg =
      `BLACKJACK! Computer wins with score ${comScore}. Player had ${playerScore} <br> 
    Player's hand was ` +
      helpfulFunctionPlayer() +
      `. <br>
    Computer's hand was` +
      helpfulFunctionComputer() +
      `. <br>
    Current Player Win: ${winRatePlayer} <br> 
    Current Computer Win: ${winRateComputer} <br> 
    Current Draws: ${drawRate}`;
  } else if (comScore != 21 && playerScore == 21) {
    winRatePlayer++;
    msg =
      `BLACKJACK! Player wins with score ${playerScore}. Computer had ${comScore} <br> 
    Player's hand was ` +
      helpfulFunctionPlayer() +
      `. <br>
    Computer's hand was` +
      helpfulFunctionComputer() +
      `. <br>
    Current Player Win: ${winRatePlayer} <br> 
    Current Computer Win: ${winRateComputer} <br> 
    Current Draws: ${drawRate}`;
  }
  return msg;
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
  } else if (
    (playerScore > comScore && playerScore < 22) ||
    comScore > 21 ||
    (playerScore == 21 && comScore != 21)
  ) {
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
  } else if (
    (comScore > playerScore && comScore < 22) ||
    playerScore > 21 ||
    (playerScore != 21 && comScore == 21)
  ) {
    winRateComputer++;
    msg =
      `Computer wins with score ${comScore}. Player had ${playerScore} <br> 
    Player's hand was ` +
      helpfulFunctionPlayer() +
      `. <br>
    Computer's hand was` +
      helpfulFunctionComputer() +
      `. <br>
    Current Player Win: ${winRatePlayer} <br> 
    Current Computer Win: ${winRateComputer} <br> 
    Current Draws: ${drawRate}`;
  }
  return msg;
};

//Check for player busting
var playerBust = function () {
  var msg = ``;
  if (playerScore > 21) {
    winRateComputer += 1;
    msg = `Player has busted with a score of ${playerScore}. Player lost! <br> Computer wins with score ${comScore}. <br>
    Current Player Win: ${winRatePlayer} <br> 
    Current Computer Win: ${winRateComputer} <br> 
    Current Draws: ${drawRate}`;
  }
  return msg;
};

//Initial Two Card Deal Mode
var dealTwoCards = function () {
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
  if (
    (handsComputer[0].name == `Ace` &&
      handsComputer[1].name == (`King` || `Queen` || `Jack`)) ||
    (handsComputer[1].name == `Ace` &&
      handsComputer[0].name == (`King` || `Queen` || `Jack`))
  ) {
    comScore = 21;
  } else if (
    (handsPlayer[0].name == `Ace` &&
      handsPlayer[1].name == (`King` || `Queen` || `Jack`)) ||
    (handsPlayer[1].name == `Ace` &&
      handsPlayer[0].name == (`King` || `Queen` || `Jack`))
  ) {
    playerScore = 21;
  }
};

//Main Game here
var main = function (input) {
  var outputMsg = ``;
  //Step 4: Deal two cards each to Player and Dealer
  //issue two cards in sequence to both player and computer
  if (gameMode == `Deal2Cards`) {
    shuffledDeck = shuffleCards(makeDeck()); //Starts with a freshly shuffled deck every time
    //resets both player and computer score back to 0 at the start of each game
    comScore = 0;
    playerScore = 0;
    handsComputer = [];
    handsPlayer = [];
    outputPlayer = ``;
    outputComputer = ``;
    dealTwoCards();
    outputMsg = checkForBlackjack();
    if (outputMsg != ``) {
      return outputMsg;
    }
    gameMode = `HitOrStand`;
    outputMsg =
      `You drew` +
      helpfulFunctionPlayer() +
      ` .Your total score is ${playerScore}. <br>  Computer's hand was` +
      helpfulFunctionComputer() +
      ` and its score is ${comScore}. <br>   Hit or Stand?`;
    //const createHitButton = document.createElement("#hit-button");
    //const innerTextHitButton = createHitButton.innerHTML("Hit!");
    //const parentHitButton = document.getElementById("#submit-button");
    //parentHitButton.appendChild(createHitButton);
    return outputMsg;
  } else if (gameMode == `HitOrStand`) {
    if (input == `Hit`) {
      handsPlayer.push(shuffledDeck.pop());
      playerScore += handsPlayer[handsPlayer.length - 1].rank;
      //outputMsg = playerBust(); //check if playerScore > 21 which equates to a bust and instant lose.
      //if (outputMsg != ``) {
      //playerBust assigns a non-null string if playerScore is >21
      //gameMode = `Deal2Cards`; //reset game
      //return outputMsg;
      //}
      outputMsg = `You drew ${handsPlayer[handsPlayer.length - 1].name} of ${
        handsPlayer[handsPlayer.length - 1].suit
      }. <br>
      Your score is ${playerScore}. Do you want to Hit again or Stand?`;
      return outputMsg;
    } else if (input == `Stand`) {
      gameMode = `playerStands`;
      outputMsg = `Player has chose to stand. Your score is ${playerScore}. <br> The computer will now act`;
      return outputMsg;
    }
  } else if (gameMode == `playerStands`) {
    while (comScore < 17) {
      //rules dictate that the dealer has to draw if his score is less than 17
      handsComputer.push(shuffledDeck.pop());
      comScore += handsComputer[handsComputer.length - 1].rank;
      outputMsg = `Computer had an initial score of ${comScore}. As score was less than 17, <br>
      Computer drew another card, ${
        handsComputer[handsComputer.length - 1].name
      } of ${handsComputer[handsComputer.length - 1].suit} <br>
      Computer's score is now ${comScore}.`;
      return outputMsg;
    }
    outputMsg = outcomeBlackJack();
    gameMode = `Deal2Cards`;
    return outputMsg;
  }
};

//const hitButton = document.querySelector("#hit-button");
//console.log(hitButton);
//hitButton.addEventListener("click", () => {
// Store the output of main() in a new variable
//var result = main("Hit"); // "hit!"

// Display result in output element
//var output = document.querySelector("#output-div");
//output.innerHTML = result;
//});

//Step 5: Check for instant blackjack and determine winner or draw
//Step 6: Check if player needs or wants to hit; if need to hit, issue 1 x card
//Step 7: Check if dealer needs or wants to hit; if need to hit, issue 1 x card
//step 8: check if anybody busts at this stage
//step 9: repeat step 6 to 8 if required
//Step 10: comapre score and output message
