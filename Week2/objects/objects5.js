// Write a function that accepts an array of objects (like the one below) and 
// returns an array of the names of people from Provo.

var people = [
  {
    name: 'Chewy',
    city: 'Provo'
  },
  {
    name: 'Obiwan',
    city: 'Tucson'
  },
  {
    name: 'Luke',
    city: 'Tatooine'
  },
  {
    name: 'Vader',
    city: 'Provo'
  },
  {
    name: 'Leia',
    city: 'Provo'
  }
];

function getProvoNames(arrayObj) {
  var provoNames = [];
  for (var n = 0; n < arrayObj.length; n++) {
    if (arrayObj[n].city === 'Provo') {
      provoNames.push(arrayObj[n].name);
    }
  }
  return provoNames;
}

var peopleProvo = getProvoNames(people);
console.log(peopleProvo);