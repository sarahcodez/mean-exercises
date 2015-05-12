var ask = require('readline-sync');

var userAnswer = ask.question('How old was Eminem on April 12, 2015? ');

while (userAnswer != '42') {
	userAnswer = ask.question('Nope! Try again: ');
}

console.log('Good job!');
