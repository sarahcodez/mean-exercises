var ask = require('readline-sync');

var stringArray = [];
var numberArray = [];

for (i = 0; i < 10; i++) {
	var userNumber = ask.question('Enter a number: ');
	stringArray.push(userNumber);
}

//console.log(stringArray);

for (i = 0; i < 10; i++) {
	var n = parseInt(stringArray);
	numberArray.push(n);
	stringArray.shift();
}

//console.log(numberArray);

function findSmallest(arr) {
 var lowest = 0;
 for (var i = 1; i < arr.length; i++) {
  if (arr[i] < arr[lowest]) {
  	lowest = i;
  }
 }
 return arr[lowest];
}

var lowestNumber = findSmallest(numberArray);
console.log('The lowest number you entered is ' + lowestNumber);

//This link gave me a guide for the function: http://blogs.msdn.com/b/oldnewthing/archive/2014/05/26/10528351.aspx