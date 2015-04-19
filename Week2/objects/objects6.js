// Write a Person class with the properties: name, age, friends, etc.

// Write at least two methods for the Person class. (i.e. A birthday class which increments the person’s age)

// Make 5 instances of the Person class and put them into an array. 
// Call each method in each person object (using a loop).

var Person = function(myName, myAge, myFriends) {
	this.name = myName;
	this.age = myAge;
	this.friends = myFriends;
	this.birthday = function() {
			return ++this.age; // Weird thing about incrementing--order of the ++ determines when it is incremented; 
	};
	this.countFriends = function() {
			return this.name + ' has ' + this.friends.length + ' friends.';
	};
};

var george = new Person('George', 45, ['Lenny', 'Sonya', 'Max']);
var rui = new Person('Rui', 27, ['Mei-li', 'John', 'Clint', 'Mateo']);
var mary = new Person('Mary', 36, ['Rui', 'Emily']);
var mateo = new Person('Mateo', 22, ['Sonya', 'Rui', 'David']);
var akiko = new Person('Akiko', 33, ['Lisa']);

var personArray = [george, rui, mary, mateo, akiko];

function callAllMethods(arrayOfObj) {
	for (var a = 0; a < arrayOfObj.length; a++) {
		var currentObj = arrayOfObj[a];
		for (var key in currentObj) {
          	if (typeof currentObj[key] === 'function') { 	//Big thanks to Erik for helping me debug this part.
			  	console.log(currentObj[key].call(currentObj)); 
			}
		}
	}
}

callAllMethods(personArray);