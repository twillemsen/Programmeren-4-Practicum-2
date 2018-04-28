const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

let app = express();

// bodyParser zorgt dat we de body uit een request kunnen gebruiken,
app.use(bodyParser.json());

// Installeer Morgan als logger
app.use(morgan('dev'));

app.use('*', function(req, res, next){
	next();
});

app.get('/api/test', function (req, res, next) {
	let test = {
		text: "Dit is een test",
		author: "Tobias Willemsen"
	}
	res.send(test);
});

app.listen(8080, () => {
	console.log('De server draait op port 8080');
});