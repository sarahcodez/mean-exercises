var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//var uuid = require('uuid'); package

app.use(bodyParser.json());

var bounties = [{firstName: 'Jon', lastName: 'Dugu', id: 0, living: true, bountyAmt: 500, type: 'Jedi'}, {firstName: 'Lara', lastName: 'Croftidala', id: 1, living: true, bountyAmt: 650, type: 'Sith'}];

app.get('/bounties/:personId', function(request, response) { //: means whatever we put after it will be stored in that variable
	//var id = request.params.personId; //params from request
	for (var i = 0; i < bounties.length; i++) {
		if (bounties[i].id === request.params.personId) { // finds value from different properties even though not same word
			response.json(bounties[i]); //how longboards store worked
		}
	}

	response.send('Could not find user with Id of: ' + request.params.personId); // if gets past conditional
}); //put whatever user puts in browser for 'personId' into variable (personId)

app.get('/bounties', function(request, response) {
	response.send(bounties);
});

app.post('/bounty', function(request, response) {
	//request.body.id = uuid.v1(); generates unique id
	request.body.id = bounties.length + 1; // this can create problems if you delete and then add
	bounties.push(request.body);
	response.send('Added ' + request.body.firstName + ' ' + request.body.lastName + ' to database with an id of: ' + request.body.id);
});

app.put('/bounty', function(request, response) {
	var data = request.body;
	for (var i = 0; i < bounties.length; i++) {
		var person = bounties[i];
		if (person.firstName === data.firstName) {
			person.lastName = data.lastName;
			response.send('Successfully updated ' + person.firstName);
			//for each ( )
		}
		//See if person's first name matches the one in the data object
	}
});

app.delete('/bounty', function(request, response)) {
	var data = request.body;
	for (var i = 0; i < bounties.length; i++) {
		var person = bounties[i];
		if (person.firstName === data.firstName) {
			people.splice(i, 1);
			response.send('Successfully updated ' + person.firstName);
			//for each ( )
		}// splice
}

//html: for loop that creates html for each object and then concatenates as it goes through loop and then send all
//back as response
//dynamic: entering id, etc.

console.log(bounties.length);

app.listen(3000);