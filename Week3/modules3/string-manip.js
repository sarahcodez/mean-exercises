var stringManip = {

	reverse: function(string) {
		return string.split("").reverse().join("");
	}, //reversing a string

	removeLower: function(string) {
		
		while(string.search(/[a-z]/) > -1) {
			var lowerIndex = string.search(/[a-z]/);
			var arr = string.split("");
            arr.splice(lowerIndex,1);
            string = arr.join("");
		}
		return string;
	}, //removing all lowercase letters from a string

	packString: function(string) {
		var toArray = string.split("");
		 
		for (var i = 0; i < toArray.length; i++) {
		   
		while (toArray[i] === toArray[i + 1]) { 
		    toArray.splice(i + 1, 1);
		    }

		}
		return toArray.join("");
		}, //packing a string (removing all consecutive duplicates)

	palindrome: function(string) {
		var toArray = string.split("");
		var index = toArray.search(" ");
		while (toArray.search(" ") < -1) {
			if ( the value at index i is a space)
		}
	}	//checking whether the string is a palindrome
	//use filter

}