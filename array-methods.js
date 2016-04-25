var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

// Use the map method to create a new array where the first letter of each planet is capitalized
var capPlanets = planets.map(function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
})
console.log("capPlanets = ", capPlanets);

// Use the filter method to create a new array that contains planets with the letter 'e'
var ePlanets = planets.filter(function(yesE) {
  return yesE.indexOf("e") === ;
})
console.log("ePlanets = ", ePlanets);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];