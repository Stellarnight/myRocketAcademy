var scoreGlobal = 0; //Global Variable to keep score
var roundCount = 0; //roundCount starts with Round 1

//Computer Word Generator
var ComWordGen = function () {
  var numGen = Math.random() * 3;
  var ranGen = Math.floor(numGen);
  var comWord = "banana";
  if (ranGen == 1) {
    comWord = "chisel";
  } else if (ranGen == 2) {
    comWord = "faucet";
  }
  return comWord;
};

var secretWordGame = function (input) {
  var comWordChoice = ComWordGen();
  var message = "";
  if (comWordChoice == input) {
    message = "Congrats! You guess correctly. ";
    scoreGlobal += 1;
    roundCount += 1;
  } else {
    message = "Sorry. You guess wrongly. ";
    roundCount += 1;
  }
  return (
    message +
    `You have tried ${roundCount} times. ` +
    `You have been correct ${scoreGlobal} times.`
  );
};

var secretWordBaseMain = function (input) {
  var gameMessageMain = "You lose.";
  while (roundCount <= 3) {
    return secretWordGame(input);
  }
  if (scoreGlobal >= 2) {
    gameMessageMain = "You win!";
  }
  return gameMessageMain;
};

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
