var express = require('express');
var bodyParser = require('body-parser');
var uuid = require('uuid');

var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var games = {};

var Game = function() {
	this.game_id = uuid.v4();
	this.min = 2;
	this.players = [];
	this.losers = [];
	this.moves = {};
	this.responses = []; //why do you need this?
};

var currentGame = new Game();
games[currentGame.game_id] = currentGame;

function compareMin (game, newMin) {
	if (newMin > game.min) {
		game.min = newMin;
	} else {
		game.min = game.min;
	}
}


app.post('/joingame', function(req, res) {
	var player = req.body;
	var playerId = req.body.id;
	var playerMin = req.body.min_players;
	if (playerId && playerMin >= 2) {
		compareMin(currentGame, playerMin);
		console.log(currentGame.min);
		currentGame.players.push(playerId);
		console.log(currentGame.players);
		console.log(currentGame.players.length);
		if (currentGame.players.length == currentGame.min) {
			var jsonData = JSON.stringify(currentGame);
			res.send(jsonData);
			//object with game id and array of players
		} else {
			console.log('Waiting for other players to join...');//return waiting response
		}
	} else {
			console.log(Error); //return error message: Please fill out all fields with a minimum number of players of 2 or higher 
	}
	

});

app.post('/turn', function(req, res) {
	//var player = req.body;
	var playerId = req.body.id;
	var playerMove = req.body.move.toLowerCase();
	console.log(playerMove);

	if (playerMove === "rock" || playerMove === "paper" || playerMove === "scissors") {
		currentGame.moves[playerId] = playerMove;
		console.log(currentGame);
		console.log(currentGame.moves.length);
	
		if (currentGame.moves.length == currentGame.min) {
			var jsonData = JSON.stringify(currentGame);
			res.send(jsonData);
			//object with game id and array of players
		} else {
			console.log('Waiting for the other players to make their choices...');//return waiting response
		}
	} else {
			console.log(Error); //return error message: Please fill out all fields with a minimum number of players of 2 or higher 
	}
	

});



app.listen(port);
console.log('Listening on port ' + port);