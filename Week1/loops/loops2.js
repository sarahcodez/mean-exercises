var ask = require('readline-sync');

var userString = ask.question('Enter a phrase or sentence: ');
var userCharacter = ask.question('Now enter a character (letter): ');
for ( i = 0; i < userString.length; i++ ) {
	if (userString[i] === userCharacter) {
		console.log('The computer found the first instance of the character you entered (' + userCharacter + ') at position: ' + i + '.');
		break;
	} 
} 

if (userString.indexOf(userCharacter) === -1) {
	console.log('Sorry. The computer could not find the character ' + userCharacter + ' in the phrase or sentence you entered.');
}

/*
Let me know if there's a more elegant way to code the last part 
where you notify the user if the computer can't find the character.
I originally wanted to put the 'computer could not find the character' message 
inside the for loop as an 'else' statement, but then in printed it out 
for every single iteration (even when the character was in the string).
*/