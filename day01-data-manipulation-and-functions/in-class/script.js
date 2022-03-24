//Base: Fahrenheit to Celsius
var fahrenheitToCelsiusMain = function (fahrenheit) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var celcius = (fahrenheit - 32) * (5 / 9);
  return celcius;
};

var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var calculateTotalFuelCost = function (tripLengthInMiles) {
  var totalFuelCost = (tripLengthInMiles / 9) * 2.2;
  return totalFuelCost;
};

var roadTripCostBaseMain = function (input) {
  // convert Km to miles
  var tripLengthInMiles = convertKmToMiles(input);

  // calculate the total fuel cost
  var totalFuelCost = calculateTotalFuelCost(tripLengthInMiles);
  return totalFuelCost;
};
/////////Comfortable:Road Trip Cost
//ferrarri
var calculateTotalFuelCostFerrari = function (tripLengthInMiles) {
  var totalFuelCost = (tripLengthInMiles / 9) * 2.2;
  return totalFuelCost;
};
//train
var calculateTotalFuelCostTrain = function (tripLengthInMiles) {
  var totalFuelCost = (tripLengthInMiles / 9) * 2;
  return totalFuelCost;
};

var roadTripCostComfortableMain = function (input) {
  // convert Km to miles
  var tripLengthInMiles = convertKmToMiles(input);

  // calculate the total fuel cost for ferrari
  var totalFuelCostFerrari = calculateTotalFuelCostFerrari(tripLengthInMiles);

  // calculate the total fuel cost for train
  var totalFuelCostTrain = calculateTotalFuelCostTrain(tripLengthInMiles);

  var myOutputValue = totalFuelCostFerrari - totalFuelCostTrain;
  return myOutputValue;
};

var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

//duration is the output. Input is number of guests
//change grams to pounds
// var that calculates how much pounds of ice does each guest need
var gramesToPounds = function (input) {
  var gramsInPounds = input * 0.00220462;
  return gramsInPounds;
};

var iceMachineMain = function (input) {
  var drinksGuest = input * 2;
  var cubesDrinksGuest = drinksGuest * 4;
  var hours = (cubesDrinksGuest * gramesToPounds(1.5)) / 5;
  return hours;
};

//One half barrel keg can accomodate 62 average customers
//One day need (number of customers for that day)/ 62 half-barrel keg
//One quarter will need 91 days of the above

var beerOrderMain = function (input) {
  var totalPintsPerDay = input * 2;

  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var cellularDataMain = function (input) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
