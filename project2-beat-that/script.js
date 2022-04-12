//Global Variables

//There are two players and player 1 always start first
var player = 1; //0 makes it easier for me to put this in an array later
var mode = `Roll Dices`; //There are two modes: Dice Rolling and Choosing the Dice
var storeDiceResultsArray = []; //I need a temporary array to store the results of the individual dice roll
var playerDiceNumber = []; //I need an array to keep the combined number after the players chooses. This will also enable me to do comparison later

//dice roller function
var rollDice = function () {
  return Math.ceil(Math.random() * 6);
};

//function to enable player to roll X number of dice and output for player to choose
var rollXDices = function (input) {
  var msg = "testing";
  if (mode === `Roll Dices`) {
    for (let i = 0; i < input; i++) {
      storeDiceResultsArray.push(Number(rollDice()));
      //console.log(storeDiceResultsArray[i]);
    }
    //console.log(storeDiceResultsArray);
    mode = `Choice`; //change mode to choice
    //console.log(msg);
    msg = `Welcome Player ${player}! <br> 
    You rolled ${storeDiceResultsArray.length} dices. Your dice rolls were ${storeDiceResultsArray}. <br>
    Please choose the order of the dice by keying in the position of the dice i.e if you want dice 1 to be first, key 1 followed by a comma for the next dice `;
    //console.log(msg);
    return msg;
  } else if (mode === `Choice`) {
    var tempArrayforSplit = input.split(",");
    for (let j = 0; j < tempArrayforSplit.length; j++) {
      playerDiceNumber[player].concat(
        storeDiceResultsArray[tempArrayforSplit[j]]
      );
    }
    mode = "Roll Dices";
    msg = `Player ${player}. You have chosen the order of dice to be ${tempArrayforSplit}. <br>
       Your number is ${playerDiceNumber[player]} <br>
       It is now ${player + 1}'s turn. Press submit to roll dices.`;
    player += 1;
    return msg;
  }
};

//Main Function
var main = function (input) {
  return rollXDices(input);
};
