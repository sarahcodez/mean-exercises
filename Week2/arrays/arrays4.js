/* Write a function that will create an ‘n’ x ‘n’ Matrix 
with random numbers using a two-dimensional array.
*/

function createMatrix(n) {
  var matrix = [];
  
  for (var x = 0; x < n; x++) {       //make rows
    matrix.push([]);
    for (var y = 0; y < n; y++) {     //make columns
      matrix[x][y] = Math.floor((Math.random() * 100) + 1); //random num between 1 and 100
    }
  }
  
  return matrix;
}

var testMatrix = createMatrix(5);
console.log(testMatrix);