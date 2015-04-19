// Write a function that accepts an object and converts each key of the object 
// to an integer index. (i.e. { type: ‘cat’, color: ‘blue’ } → { 1: ‘cat’, 2: ‘blue’ })

function integerIndex(oldObject) {
	var integerObject = {};
	var index = 1;
	for (var key in oldObject) {
		integerObject[index] = oldObject[key];
        index++;
	}
	return integerObject;
}

var exampleObject = { 
	type: "cat", 
	color: "black", 
	eyes: "green", 
	favFood: "tuna"};

var newObject = integerIndex(exampleObject);
console.log(newObject);