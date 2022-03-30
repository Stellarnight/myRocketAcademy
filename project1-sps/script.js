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
//Normal Mode SCP
var normalSCP = function () {
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
  if (!input == "scissor" || "paper" || "stone") {
    var outputMessage =
      "Invalid input. Please key in lower case; scissor, paper or stone";
  }
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
