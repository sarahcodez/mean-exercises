// Write a module with a function that will return the name of the month given its index.

// 0 -> “January”
// 1 -> “February”
// . . . 
// 11 -> “December”

var getMonth = function (index) {
	var months = ["January", "February", "March", "April", "May", "June", 
	"July", "August", "September", "October", "November", "December"];
	return months[index];
}

module.exports = getMonth;