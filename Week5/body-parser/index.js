//An exercise to replicate the (json and urlencoded functions of the) body-parser package 
//We prefaced the bodyParser functions with if statements to ensure the request had content

var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

var bodyParser = {
	json: function (req, res, next) {
				if (req.headers['content-type'].toLowerCase() === 'application/json') { //check headers
					console.log(req.headers['content-length']);
					if (!parseInt(req.headers['content-length'])) { //content-length is a string; if you pass a 0 into an if statement, it returns false
						req.body = {};
						next();
					} else {
						req.on('data', function (data) { //turn raw data into a js object
							try {
								req.body = JSON.parse(data.toString());
								next();
							} catch (e) {
								res.send('Invalid json');
							}
					
						});
					}

				} else {
					next();
				}				  
	},
	urlencoded: function (req, res, next) {
				if (req.headers['content-type'].toLowerCase() === 'application/x-www-form-urlencoded') {
					console.log(req.headers['content-length']);
					if (!parseInt(req.headers['content-length'])) {
						req.body = {};
						next();
					} else { 

						req.on('data', function (data) {
							try {
								var jsonData = data.toString().replace(/=/g, '":"').replace(/&/g, '","');
								req.body = JSON.parse('{"' + jsonData + '"}');
								next();
							} catch (e) {
								res.send('Invalid x-www-form-urlencoded');
							}
						//console.log(data.toString());
						//console.log(req.body);
						});

					}

				} else {
					next();
				}
	}
};

app.use( bodyParser.json);
app.use( bodyParser.urlencoded );

app.post('/test', function (req, res) {
	console.log(req.body);
	res.send(req.body);
});

app.listen(PORT);
console.log('Listening on port ' + PORT);