var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  var counter = 0;
  var myOutputValue = "";
  while (counter < input) {
    myOutputValue += `😊`;
    counter += 1;
  }
  return myOutputValue;
};

var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var columnCounter = 0;
  var myOutputValue = "";
  while (columnCounter < input) {
    var rowCounter = 0;
    while (rowCounter < input) {
      myOutputValue += `😊`;
      rowCounter += 1;
    }
    columnCounter += 1;
    myOutputValue += `<br>`;
  }
  return myOutputValue;
};

var emojiTriangleMain = function (input) {
  var myOutputValue = "";
  var columnCounter = 0;
  while (columnCounter < input) {
    var rowCounter = 0;
    while (rowCounter < columnCounter + 1) {
      myOutputValue += `😊`;
      rowCounter += 1;
    }
    columnCounter += 1;
    myOutputValue += `<br>`;
  }
  return myOutputValue;
};

//for loop
var emojiTriangleMain1 = function (input) {
  var myOutputValue = "";
  for (let i = 0; i < input; i++) {
    //each row
    for (let j = 0; j < i + 1; j++) {
      //each column
      myOutputValue += `😊`;
    }
    myOutputValue += `<br>`;
  }
  return myOutputValue;
};

var emojiOutlineSquareMain = function (input) {
  var columnCounter = 0;
  var myOutputValue = "";
  while (columnCounter < input) {
    var rowCounter = 0;
    while (rowCounter < input) {
      if (
        rowCounter == 0 ||
        rowCounter == input - 1 ||
        columnCounter == 0 ||
        columnCounter == input - 1
      ) {
        myOutputValue += `👍🏻`;
        rowCounter += 1;
      } else {
        myOutputValue += `😊`;
        rowCounter += 1;
      }
    }
    columnCounter += 1;
    myOutputValue += `<br>`;
  }
  return myOutputValue;
};

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var gameMode = "Mode 1"; //global variable for Multi-Dice Game
var numDiceRoll = "";

var rollDice = function () {
  return Math.ceil(Math.random() * 6);
};

var multiDiceBaseMain = function (input) {
  var myOutputValue = "You lose";
  if (gameMode == "Mode 1") {
    numDiceRoll = input;
    gameMode = "Mode 2";
  } else {
    var playerGuess = input;
    var counter = 0;
    while (counter < numDiceRoll) {
      var roll1 = rollDice();
      console.log(`roll1:`, roll1);
      if (playerGuess == roll1) {
        myOutputValue = `You win`;
      }
      counter += 1;
    }
  }
  return myOutputValue;
};

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
