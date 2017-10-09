'use strict';

const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

const names = ["larry", "mo", "curly", "linda"]
app.get('/', (req, res, next) => {
	res.render('index', {
		subtitle: "This came from my JS data",
		names,
		loggedIn: false,
		url:`${req.url}`
	})
})

app.get('/about', (req, res, next) => {
	res.render('about', {
		subtitle: "This came from my article data", 
		names, 
		loggedIn: false,
		url: `${req.url}`
	})
})

app.get('/inventory', (req, res, next) => {
	res.render('inventory', {
		subtitle: "This came from my article data", 
		names, 
		loggedIn: false,
		url: `${req.url}`
	})
})

app.listen(3000, () => {
	console.log('listening on port 3000');
});