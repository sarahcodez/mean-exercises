var request = require('request');

var contacts, messages;

request('http://mean.codingcamp.us:8000/contacts', incoming_contacts);

function incoming_contacts(error, response, body) {
	contacts = JSON.parse(body);
	if (contacts) {
		process_data();
	}
}

request('http://mean.codingcamp.us:8000/messages', incoming_messages);

function incoming_messages(error, response, body) {
	messages = JSON.parse(body);
	if (messages) {
		process_data();
	}
}

function process_data() {
	if(messages && contacts) {
		
		for (var i = 0; i < messages.length; i++) {
				var idNum;
				var contactsindex;
				idNum = messages[i].user_id;
				contactsIndex = idNum - 1;
				console.log(contacts[contactsIndex].name + ": " + messages[i].text);
			}

	}
}