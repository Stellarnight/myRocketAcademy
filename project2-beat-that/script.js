var mode = "Player1Roll"; //default start mode
var p1Dice1 = "A";
var p1Dice2 = "B";
var p2Dice1 = "C";
var p2Dice2 = "D";
var p1CombinedScoreArray = [];
var p1CombinedScore = "E";
var p2CombinedScoreArray = [];
var p2CombinedScore = "F";

//dice roller function
var rollDice = function () {
  return Math.ceil(Math.random() * 6);
};

var main = function (input) {
  if (mode === "Player1Roll") {
    p1Dice1 = rollDice();
    p1Dice2 = rollDice();
    p1CombinedScoreArray.push(p1Dice1, p1Dice2);
    mode = "Player1Choose";
    return (
      `Welcome Player 1` +
      `<br>` +
      `You rolled ${p1Dice1} and ${p1Dice2}.` +
      `<br>` +
      `Choose the order of the dice by entering either 1 or 2`
    );
  } else if (mode === `Player1Choose`) {
    if (input == "1") {
      p1CombinedScore =
        String(p1CombinedScoreArray[0]) + String(p1CombinedScoreArray[1]);
      mode = `Player2Roll`;
      return (
        `Player 1, you chose dice 1 first.` +
        `<br>` +
        `Your number is ${p1CombinedScore}. <br> ` +
        `It is now Player 2's turn.`
      );
    } else if (input == "2") {
      p1CombinedScore =
        String(p1CombinedScoreArray[1]) + String(p1CombinedScoreArray[0]);
      mode = `Player2Roll`;
      return (
        `Player 1, you chose dice 2 first.` +
        `<br>` +
        `Your number is ${p1CombinedScore}. <br> ` +
        `It is now Player 2's turn.`
      );
    }
  } else if (mode === `Player2Roll`) {
    p2Dice1 = rollDice();
    p2Dice2 = rollDice();
    p2CombinedScoreArray.push(p2Dice1, p2Dice2);
    mode = "Player2Choose";
    return (
      `Welcome Player 2` +
      `<br>` +
      `You rolled ${p2Dice1} and ${p2Dice2}.` +
      `<br>` +
      `Choose the order of the dice by entering either 1 or 2`
    );
  } else if (mode === `Player2Choose`) {
    if (input == "1") {
      p2CombinedScore =
        String(p2CombinedScoreArray[0]) + String(p2CombinedScoreArray[1]);
      mode = `WinOrLose`;
      return (
        `Player 2, you chose dice 2 first.` +
        `<br>` +
        `Your number is ${p2CombinedScore}. <br> ` +
        `Press submit again to see who won`
      );
    } else if (input == "2") {
      p2CombinedScore =
        String(p2CombinedScoreArray[1]) + String(p2CombinedScoreArray[0]);
      mode = `WinOrLose`;
      return (
        `Player 2, you chose dice 2 first.` +
        `<br>` +
        `Your number is ${p2CombinedScore}. <br> ` +
        `Press submit again to see who won.`
      );
    }
  } else if (mode === "WinOrLose") {
    var outputMessage = "Draw!";
    if (p1CombinedScore > p2CombinedScore) {
      outputMessage = "Player 1 wins!";
      return outputMessage;
    } else if (p1CombinedScore < p2CombinedScore) {
      outputMessage = "Player 2 wins!";
      return outputMessage;
    }
    return outputMessage;
  }
};
