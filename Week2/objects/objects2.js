// Write a function that copies an object into another variable. 
// If the new object is changed, the first object should remain untouched. 

function copyObject(oldObject) {
  	newObject = {};
  	for (var key in oldObject) {
 		newObject[key] = oldObject[key];
	}
	return newObject;
}

var oldExample = {
	name: "Sarah",
	hairColor: "brown",
	secondLang: "Japanese"
};

var newExample = copyObject(oldExample);

console.log(newExample);

//test by changing newExample

newExample.age = 34;

console.log(newExample);
console.log(oldExample);