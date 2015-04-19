// Write a function that asks for the different pieces of data in your address 
// (name, street, city, zip, etc) as input and stores this data in an object. 
// Print this object to the console.

///Solution 1:

function printAddress(name, street, city, zip, country) {
	return {
		name: name,
		street: street,
		city: city,
		zip: zip,
		country: country
	};
}

console.log(printAddress("Sarah Graham", "1223 Oak Lane", "Provo", "84601", "USA"));

//Solution 2:

function printAddress(name, street, city, zip, country) {
	var address = {
		name: name,
		street: street,
		city: city,
		zip: zip,
		country: country
	};
	console.log(address);
}

printAddress("Sarah Graham", "1223 Oak Lane", "Provo", "84601", "USA");