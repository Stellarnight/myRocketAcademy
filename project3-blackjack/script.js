//Function to create a deck of 52 cards
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

//deck shuffle
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

var comScore = 0;
var playerScore = 0;
var winRateComputer = 0;
var winRatePlayer = 0;
var drawRate = 0;

//Determine winning or losing
var outcomeBlackJack = function () {
  handsComputer = [];
  handsPlayer = [];
  if (comScore > 21) {
    winRatePlayer++;
    msg = `Computer busted. Computer has total ${comScore} <br> 
    Current Player Win: ${winRatePlayer} <br> 
    Current Computer Win: ${winRateComputer} <br> 
    Current Draws: ${drawRate}`;
    return msg;
  }
  //to come back and include a for function to accomodate multiple players***
  else if (playerScore > 21) {
    winRateComputer++;
    msg = `Player busted. Player has total ${playerScore} <br> 
    Current Player Win: ${winRatePlayer} <br> 
    Current Computer Win: ${winRateComputer} <br> 
    Current Draws: ${drawRate}`;
    return msg;
  } else if (playerScore == 21) {
    winRatePlayer++;
    msg = `Player has hit BLACKJACK. Player wins <br> 
    Current Player Win: ${winRatePlayer} <br> 
    Current Computer Win: ${winRateComputer} <br> 
    Current Draws: ${drawRate}`;
    return msg;
  } else if (comScore == 21) {
    winRateComputer++;
    msg = `Computer has hit BLACKJACK. Computer wins<br> 
    Current Player Win: ${winRatePlayer} <br> 
    Current Computer Win: ${winRateComputer} <br> 
    Current Draws: ${drawRate}`;
    return msg;
  } else if (playerScore > comScore) {
    winRatePlayer++;
    msg = `Player wins with score ${playerScore}. Computer has ${comScore} <br> 
    Current Player Win: ${winRatePlayer} <br> 
    Current Computer Win: ${winRateComputer} <br> 
    Current Draws: ${drawRate}`;
    return msg;
  } else if (playerScore < comScore) {
    winRateComputer++;
    msg = `Computer wins with score ${comScore}. Player has ${playerScore}<br> 
    Current Player Win: ${winRatePlayer} <br> 
    Current Computer Win: ${winRateComputer} <br> 
    Current Draws: ${drawRate}`;
    return msg;
  } else if (playerScore == comScore) {
    drawRate++;
    msg = `Draw! <br> 
    Current Player Win: ${winRatePlayer} <br> 
    Current Computer Win: ${winRateComputer} <br> 
    Current Draws: ${drawRate}`;
    return msg;
  }
};

// Shuffle the deck and save it in a new variable shuffledDeck
// to communicate that we have shuffled the deck.
var shuffledDeck = shuffleCards(makeDeck());
// Define arrays to capture the cards for both players
var handsComputer = [];
var handsPlayer = [];

//HERE IS THE MAIN CODE FOR GAME

var main = function (input) {
  //issue two cards in sequence to both players and comptuers
  comScore = 0;
  playerScore = 0;
  for (i = 0; i < 2; i++) {
    handsComputer.push(shuffledDeck.pop());
    handsPlayer.push(shuffledDeck.pop());
  }
  //score comparision time - Basic level no ability for both players to draw
  for (i = 0; i < handsComputer.length; i++) {
    comScore += handsComputer[i].rank;
  }
  //reset the hands
  for (i = 0; i < handsPlayer.length; i++) {
    playerScore += handsPlayer[i].rank;
  }
  return outcomeBlackJack();
};
