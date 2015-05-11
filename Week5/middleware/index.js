var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

var signature = 'Da Vinci';

var paintings = [
  {
    name: 'Mona Lisa',
    image: 'http://uploads6.wikiart.org/images/leonardo-da-vinci/mona-lisa.jpg'
  },
  {
    name: 'The Last Supper',
    image: 'http://www.italian-renaissance-art.com/images/Leonardoafter-last-supper.jpg'
  }
];

var inventions = [
  {
    name: 'Aerial Screw',
    image: 'http://www.leonardo-da-vinci-biography.com/images/leonardo-da-vinci-inventions.2.jpg'
  }
];

app.use(function (req, res, next) {
	res.send_with_signature = function(html) {
		res.send(html + '</br>' + signature);
	}
	//req.secret = 'this is a secret';
	//res.send('You shall not PASS!');
	next();
});

app.get('/painting/:id', function (req, res, next) {
	//one way to deal with errors
	if (!paintings[req.params.id]) {
		next();
	} //if value we're trying to get is not defined
	else {
		var html = '<h1>' + paintings[req.params.id].name + '</h1>';
  		html += '<br/><img height="300" src="' + paintings[req.params.id].image + '">';
  		res.send_with_signature(html);

	}
  
});

app.get('/invention/:id', function (req, res, next) {
	//another way to deal with errors
	try {

		var html = '<h1>' + inventions[req.params.id].name + '</h1>';
  		html += '<br/><img height="300" src="' + inventions[req.params.id].image + '">';
  		res.send_with_signature(html);

	} catch (error) {
		next();
	}
  
});

app.use(function (req, res, next) {
	res.send('Error');
});



app.listen(port);

console.log('Listening on port ' + port);