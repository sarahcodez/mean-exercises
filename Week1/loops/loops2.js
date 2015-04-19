var ask = require('readline-sync');

var userString = ask.question('Enter a phrase or sentence: ');
var userCharacter = ask.question('Now enter a character (letter): ');

var found = false;
for ( i = 0; i < userString.length; i++ ) {
	if (userString[i] === userCharacter) {
		console.log('The computer found the first instance of the character you entered (' + userCharacter + ') at position: ' + i + '.');
		found = true;
		break;
	} 
} 

if (!found) {
	console.log('Sorry. The computer could not find the character ' + userCharacter + ' in the phrase or sentence you entered.');
}

/*
Thanks to Robert for helping me simplify my code with the found variable
*/