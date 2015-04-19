// Exercise 1

var fiveNum = [4, 6, 7, 4, 3];

// a

function secondNum(arr) {
	return fiveNum[1];
}

var answer1 = secondNum(fiveNum);
console.log(answer1);

//b

function loopArr(arr) {
	for (i = 0; i < arr.length; i++) {
		console.log(arr[i]); 
	}
}

loopArr(fiveNum);

//c

function addNum(arr) {
	var sum = 0;
	for (i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

var answer3 = addNum(fiveNum);
console.log(answer3);

//d

function removeLargest(arr) {
	var largest = 0;
	for(i = 0; i < arr.length; i++) {
		if (arr[i] > largest) {
			largest = arr[i];
		}
	}
	while(arr.indexOf(largest) > -1) {
			var index = arr.indexOf(largest);
			arr.splice(index, 1);
			}
	//If largest number is repeated, removes all instances
	return arr;
		}

var answer4 = removeLargest(fiveNum);
console.log(answer4);

//e

function addAvgNum(arr) {
	var sum = 0;
	for (i = 0; i < arr.length; i++) {
		sum += arr[i]; 
	}
	var avgNum = Math.round(sum / arr.length);
	arr.push(avgNum);
	return arr;
}

var answer5 = addAvgNum(fiveNum);
console.log(answer5);
