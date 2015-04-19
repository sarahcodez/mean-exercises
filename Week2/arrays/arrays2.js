//Exercise 2

var sentence = "This is the coolest sentence everrr.";
var lowerSent = sentence.toLowerCase();
//For exercise b. Uppercase words are sorted alphabetically
//before lowercase words with sort()

//a

var wordArray = lowerSent.split(" ");
console.log(wordArray);

//b

var alphabeticalArray = wordArray.sort(); 
console.log(alphabeticalArray);

//By default, sort() sorts the values of the array 
//alphabetically in ascending order.

//c

var concatString = alphabeticalArray.join(" ");
console.log(concatString);