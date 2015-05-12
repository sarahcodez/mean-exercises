var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var uuid = require('uuid'); //package

app.use(bodyParser.json());

var bounties = [{firstName: 'Jon', lastName: 'Dugu', id: 0, living: true, bountyAmt: 500, type: 'Jedi'}, {firstName: 'Lara', lastName: 'Croftidala', id: 1, living: true, bountyAmt: 650, type: 'Sith'}];

//**why doesn't this work for ids you've set beforehand? The property name is the same, so it seems like it should work.
app.get('/bounty/:personId', function(request, response) { //: means whatever we put after it will be stored in that variable
	for (var i = 0; i < bounties.length; i++) {
		if (bounties[i].id === request.params.personId) { // finds value from different properties even though not same word
			response.json(sbounties[i]); //how longboards store worked
		}
	}
	response.send('Could not find user with Id of: ' + request.params.personId); // if gets past conditional
});

app.get('/bounty', function(request, response) {
	var htmlString = '<h1>Bounties</h1><p>(A list of all my <style='color: green'>bounties</style> and <style='color: red'>kills</style>)</p><ul>';
	for(var i = 0; i < bounties.length; i++) {
		htmlString += '<h2>' + bounties[i].firstName + ' ' + bounties[i].lastName + '</h2><ul>' +
		'<li>Living: ' + bounties[i].living'</li>' + 
		'</ul>';
	}
	response.send(htmlString);
});

app.post('/bounty', function(request, response) {
	//request.body.id = uuid.v1(); generates unique id
	request.body.id = uuid.v1();
	bounties.push(request.body);
	response.send('Added ' + request.body.firstName + ' ' + request.body.lastName + ' to database with an id of: ' + request.body.id);
});

//**how could you code this so it doesn't overwrite old properties that are not specified in the update?
//do conditional on each one to see if data.lastName === true, etc. --each nested inside
//option 2: for loop each property in request Obj --> (it exists) --> match property names
//how do you get array of properties? How extract name of property
//search for obj.keys in riot api file does this
app.put('/bounty/:personId', function(request, response) {
	var data = request.body;
	for (var i = 0; i < bounties.length; i++) {
		var person = bounties[i];
		if (person.id === request.params.personId) {
			person.firstName = data.firstName;
			person.lastName = data.lastName;
			person.living = data.living;
			person.bountyAmt = data.bountyAmt;
			person.type = data.type;
			response.send(person);
			//for each ( )
		}
	}
	response.send('Could not find bounty with Id of: ' + request.params.personId);
});

app.delete('/bounty/:personId', function(request, response) {
	//var data = request.body;
	for (var i = 0; i < bounties.length; i++) {
		var person = bounties[i];
		if (person.id === request.params.personId) {
			bounties.splice(i, 1);
			response.send('Successfully deleted ' + person.firstName);
			//for each ( )
		}// splice
	}
	response.send('Could not find bounty with Id of: ' + request.params.personId);
});

//html: for loop that creates html for each object and then concatenates as it goes through loop and then send all
//back as response
//dynamic: entering id, etc.

console.log(bounties.length);

app.listen(3000);