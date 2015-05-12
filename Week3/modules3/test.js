function removeLower(string) {
		
		while(string.search(/[a-z]/) > -1) {
			var lowerIndex = string.search(/[a-z]/);
			var arr = string.split("");
            arr.splice(lowerIndex,1);
            string = arr.join("");
		}
		return string;
	}

var test = removeLower("0mg this Here Be an&ther Test.");
console.log(test);