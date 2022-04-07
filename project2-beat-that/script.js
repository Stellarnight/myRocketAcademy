var mode = "Player1Roll"; //default start mode

//dice roller function
var rollDice = function () {
  return Math.ceil(Math.random() * 6);
};

var main = function (input) {
  if (mode === "Player1Roll") {
    var p1Dice1 = rollDice();
    var p1Dice2 = rollDice();
    mode = "Player1Choose";
    return (
      `Welcome Player 1` +
      `<br>` +
      `You rolled ${p1Dice1} and ${p1Dice2}.` +
      `<br>` +
      `Choose the order of the dice`
    );
  } else if (mode === `Player1Choose`) {
    if (input === "1") {
      var p1CombinedDice = p1Dice1 + p1Dice2;
      mode = `Player2Roll`;
      return (
        `Player 1, you chose dice 1 first.` +
        `<br>` +
        `Your number is ${p1CombinedDice}. <br> ` +
        `It is now Player 2's turn.`
      );
    }
  } else if (mode === `Player2Roll`) {
    return `happiness`;
  }
};
