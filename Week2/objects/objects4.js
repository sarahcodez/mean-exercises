// Write a function that accepts an array of objects (like the one below) and 
// returns the name of the second-place competitor.

var tournament = [
  {
    'Aaron': 3,
    'Jaquelin': 4,
    'Denise': 7.6,
    'Blake:': 3.01,
    'O\'Shaughnessy': undefined,
    'Timothy': 11
  }
];

function secondPlace(arrayOfObj) {
	var winnerScore = 0;
	var secondScore = 0; 
	var secondName;
	for(var x = 0; x < arrayOfObj.length; x++) { //loop through each object in array
		var xObject = arrayOfObj[x];
		for (var xKey in xObject) {  //loop through each key in each object
			if (xObject[xKey] >  winnerScore) {  //to find the winner's score
				winnerScore = xObject[xKey];
			} 
		}
	}
	for (var y = 0; y < arrayOfObj.length; y++) { //loop through each object in array again
		var yObject = arrayOfObj[y]; 
		for (var yKey in yObject) { //loop through each key in each object again
			if ((yObject[yKey] > secondScore) && (yObject[yKey] < winnerScore)) { //to find the second highest score
				secondScore = yObject[yKey];
				secondName = yKey;
			}
		}
	}
	return secondName;
}

var runnerUp = secondPlace(tournament);
console.log(runnerUp);

//I bet this can be done in a more concise way. 
//I'm wondering if Math.max(num1,num2) would come in handy, but my brain needs a rest.


