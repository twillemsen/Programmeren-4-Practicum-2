const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const config = require("./config.json");

let app = express();

app.set("PORT", config.webPort);

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

app.listen(app.get("PORT"), () => {
	console.log('De server draait op port 8080');
});