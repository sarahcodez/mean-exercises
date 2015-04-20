// Goal: replace the second letter of any string with a 'z'
 
var string = 'abc';
 
function replace_letter(word) {
  var newWord = word[0] + 'z' + word.substr(2); 
  return newWord;
}

/*
In JavaScript, strings are immutable, which means the best you can do is create a new string with the changed content, and assign the variable to point to it.

http://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
*/

string = replace_letter(string);
 
// do not change this code 
if (string[1] != 'z') console.log('fail');
else console.log('succeed');
// do not change this code