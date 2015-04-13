var ask = require('readline-sync');

var userString = ask.question('Enter a word, phrase or sentence: ');
var stringArray = userString.split('');

for (i = 0; i < stringArray.length; i++) {
	console.log(stringArray[i] + '\n');
}
