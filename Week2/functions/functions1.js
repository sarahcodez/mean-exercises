//Exercise 1

function add(a,b) {
	return a + b;
}

// Test case:
/* 

var answer = add(3,4);
console.log(answer);

*/

//Exercise 2

var compare = function(a,b,c) {
	var largestNum;
	
	if (a > b) {
		largestNum = a;
	} else {
		largestNum = b;
	}

	if (c > largestNum) {
		largestNum = c;
	}

	return largestNum;

};

// Test case:
/* 

var answer = compare(-6,0,-2);
console.log(answer);

*/

//Exercise 3

function getEvenOdd(n){
	if(n % 2 === 0) {
		return 'even';
	} else {
		return 'odd';
	} 	
}

//Test cases:
/* 

console.log(getEvenOdd(5));
console.log(getEvenOdd(88));
console.log(getEvenOdd(4.5));

*/

//Exercise 4

var modString = function(string) {
	if(string.length <= 20) {
		return string + string;
	} else {
		var findHalf = Math.round(string.length/2);
		return string.substr(0, findHalf);
	}
};

//Test cases:
/* 

console.log(modString('This is a test.'));

var long1 = 'John Jingleheimer Schmidt!';
console.log(long1.length);
console.log(long1.substr(0, 13));
console.log(modString('John Jingleheimer Schmidt!'));

var long2 = 'Hi there. My name is Sarah.';
console.log(long2.length);
console.log(long2.substr(0, 14));
console.log(modString('Hi there. My name is Sarah.'));

*/

//Exercise 5

