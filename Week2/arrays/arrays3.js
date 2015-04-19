//Exercise 3
var sampString = "this is a test yo";

function reverseString(aString) {
	var revArray = [];
	for(i = 0; i < aString.length; i++) {
		revArray.unshift(aString[i]);
	}
	var concatRev = revArray.join("");
    return concatRev;
}

var revstrTest = reverseString(sampString);
console.log(revstrTest);