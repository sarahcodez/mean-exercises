var ask = require('readline-sync');

var firstName = ask.question('Greetings. What is your first name? ');
var firstUpper = firstName.toUpperCase();

console.log('\nWake up, ' + firstUpper + '.\n\tThe Matrix has you.\n');
console.log('\t\t*dramatic pause...*\n');

var lastName = ask.question('So, ' + firstUpper + 
	', what is your last name? ');
var lastUpper = lastName.toUpperCase();

var age = ask.question('I see. And how many Matrix years have you experienced? ');

var story = ask.question('Now, ' + firstUpper + 
	', tell me a bit about what you do right now...\n\tor what you *think* you do. Complete this sentence: I am \n\t');
var storyLength = story.length;

console.log('\n\nI know a lot about you, ' + firstUpper + 
	'. \n\tI know that your full name is ' + firstUpper + ' ' + lastUpper + 
	'\n\t\tand that you believe you are ' + age + ' years old.');
console.log('\nI know what you\'ve been doing...\n\tand that the story you told me about it is ' + 
	storyLength + ' characters long.');

if(storyLength > 20) {
	var divideStory = Math.round(story.length / 2);
	var halfStory = story.substr(divideStory);
	console.log('I... spaced out because it was so long. This is what I remember: ' + halfStory);
	var userNumber = ask.question('But I can retrieve your story from a different place using my kungfu powers. \n\tPick a number between 0 and ' + story.length + '. ');
	var finalStory = story.substr(userNumber);
	console.log('Ahem. To continue, I know why you are ' + finalStory + '...');
} else {
	console.log('I know why you are ' + story + '...');
}

console.log('\n\tI know why you hardly sleep, \n\tand why night after night you sit at your computer. \n\tI know, because I was once looking for the same thing. \n\tIt\'s the question that drives us, ' 
	+ firstUpper + '. \n\tIt\'s the question that brought you here. \n\tYou know the question, just as I did...\n\t');

var favColor = ask.question('RED or BLUE? ');
var colorUpper = favColor.toUpperCase();

if (colorUpper == 'RED') {
	console.log('\n\tWelcome to the real world, ' + firstUpper + '...');

} else {
	console.log('\n\tThe answer is out there, ' + firstUpper + 
		'. \n\tIt\'s looking for you...and it will find you...\n\tif you want it to...');
}





