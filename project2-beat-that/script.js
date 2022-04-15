//Global Variables

//There are X number of players and player 1 always start first
var totalPlayers = 0;
var player = 1;
var mode = `Input number of Players`; //There are three modes: Player number input, Dice Rolling and Choosing the Dice
var storeDiceResultsArray = []; //I need a temporary array to store the results of the individual dice roll
var playerDiceNumber = []; //I need an array to keep the combined number after the players chooses. This will also enable me to do comparison later
var numDice = 0;

//dice roller function
var rollDice = function () {
  return Math.ceil(Math.random() * 6);
};

//User-input on how many players playing
var numPlayersInput = function (input) {
  totalPlayers = input;
  mode = "Roll Dices";
  return `There are ${totalPlayers} players. Please key in the number of dices each player will roll in numbers and click submit`;
};

//function to enable player to roll X number of dice and output for player to choose
var rollXDices = function (input) {
  var msg = "testing";
  numDice = input; // I need to assign the input to a variable or else each player have to key in the number of dice
  if (mode == `Roll Dices`) {
    for (let i = 0; i < numDice; i++) {
      var diceRoll = rollDice();
      storeDiceResultsArray.push(Number(diceRoll));
      //console.log(rollDice());
    }
    //console.log(storeDiceResultsArray);
    mode = `Choice`; //change mode to choice
    //console.log(msg);
    msg = `Welcome Player ${player}! <br> 
    You rolled ${storeDiceResultsArray.length} dices. Your dice rolls were ${storeDiceResultsArray}. <br>
    Please choose the order of the dice by keying in the position of the dice i.e if you want dice 1 to be first, key 1 followed by a comma for the next dice `;
    //console.log(msg);
    return msg;
  } else if (mode == `Choice`) {
    //This triggers the mode for players to choose the order of their dices
    var tempArrayforSplit = input.split(",");
    var tempCombinedDiceNumber = ""; //Define as string so i can concatenate the dices without triggering an addition
    for (let j = 0; j < tempArrayforSplit.length; j++) {
      tempCombinedDiceNumber += storeDiceResultsArray[tempArrayforSplit[j] - 1]; //im concatenating the numbers based on the dice orders given
      //console.log(tempCombinedDiceNumber);
    }
    playerDiceNumber[player] = tempCombinedDiceNumber;
    mode = `Roll Dices`;
    else if (!player == totalPlayers) {
      msg = `Player ${player}. You have chosen the order of dice to be ${tempArrayforSplit}. <br>
      Your number is ${playerDiceNumber[player]} <br>
      It is now Player ${player + 1}'s turn. Press submit to roll dices.`;
      player += 1;
      return msg;
    }
    msg = `Player ${player}. You have chosen the order of dice to be ${tempArrayforSplit}. <br>
    Your number is ${playerDiceNumber[player]} <br>
    All players have rolled. Press Submit to see who is the winner!`
    return msg;
  } 
};

//Determine Winner - adapted a useful fxn from https://stackoverflow.com/questions/11301438/return-index-of-greatest-value-in-an-array
var determineWinner = function() {
  var max = playerDiceNumber[0]; //initialise first player dice as the highest score
  var maxIndex = 0; //to match above
  for (var i =1; i<playerDiceNumber.length;i++){
    if (playerDiceNumber[i]>max) {
      max = playerDiceNumber[i];
      maxIndex = i;
    }
  }
}

//Main Function
var main = function (input) {
  if (mode == `Input number of Players`) {
    return numPlayersInput(input);
  }
  while (player <= totalPlayers) {
    return rollXDices(input);
  } else if (player == totalPlayers) {
    return determineWinner;
  }
};
