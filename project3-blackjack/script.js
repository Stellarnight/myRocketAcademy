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

var main = function (input) {
  return makeDeck();
};
