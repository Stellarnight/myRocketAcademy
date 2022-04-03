//global variables
var scoreGlobalPlayer = 0;
var scoreGlobalCom = 0;
var scoreDraw = 0;
var userName = "";
var gameScpState = "Waiting for user name";

//Helper function to define game state
var gameStateDefiner = function (input) {
  if (gameScpState == "Waiting for user name") {
    userName = input;
    gameScpState = "Start Game";
  }
};

//helper function to generate random SCP for the "AI"
var computerSCP = function () {
  var randomFloatSCP = Math.random() * 3;
  var randomIntegerSCP = Math.floor(randomFloatSCP);
  if (randomIntegerSCP == 0) {
    var comSCP = "scissor";
  } else if (randomIntegerSCP == 1) {
    var comSCP = "paper";
  } else if (randomIntegerSCP == 2) {
    var comSCP = "stone";
  }
  return comSCP;
};

//Normal Mode SCP
var normalSCP = function (input) {
  var comSCPOutput = computerSCP();
  var playerSCP = input;
  var outputMessage = "You lose!";
  if (comSCPOutput == playerSCP) {
    outputMessage = "Draw!";
  } else if (comSCPOutput == "paper" && playerSCP == "scissor") {
    outputMessage = "You win!";
  } else if (comSCPOutput == "stone" && playerSCP == "paper") {
    outputMessage = "You win!";
  } else if (comSCPOutput == "scissor" && playerSCP == "stone") {
    outputMessage = "You win!";
  }
  return outputMessage;
};

//Combined SCP Game Function
var main = function (input) {
  gameStateDefiner(input);
  if (!input == "scissor" || "paper" || "stone") {
    //Data validation
    var outputMessage =
      "Invalid input. Please key in lower case; scissor, paper or stone";
  }
  var outputMessage = normalSCP(input);
  if (outputMessage == "You win!") {
    scoreGlobalPlayer += 1;
  } else if (outputMessage == "Draw!") {
    scoreDraw += 1;
  } else if (outputMessage == "You lose!") {
    scoreGlobalCom += 1;
  }
  return (
    outputMessage +
    ` You, ${userName} has won ${scoreGlobalPlayer} times.` +
    "<br>" +
    `The computer has won ${scoreGlobalCom} times.` +
    "<br>" +
    `There are ${scoreDraw} draws. `
  );
};/

//Reverse Mode SCP
var reverseSCP = function () {
  var comSCPOutput = computerSCP();
  var playerSCP = input;
  var outputMessage = "You win!";
  if (comSCPOutput == playerSCP) {
    outputMessage = "Draw!";
  } else if (comSCPOutput == "paper" && playerSCP == "scissor") {
    outputMessage = "You lose!";
  } else if (comSCPOutput == "stone" && playerSCP == "paper") {
    outputMessage = "You lose!";
  } else if (comSCPOutput == "scissor" && playerSCP == "stone") {
    outputMessage = "You lose!";
  }
  return outputMessage;
};
