const express = require ('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var users = [
	{ id: 1, name: "Mint" },
	{ id: 2, name: "Big" },
	{ id: 3, name: "Pub" }
];

app.get('/', (req, res) => res.render('index',{
	name: "Mint"
}));

app.get('/users', (req, res) => res.render('users/index', {
	users: users
}));

app.get('/users/search', function (req, res) {
	var q = req.query.q;
	var matchedUser = users.filter( user =>
		user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
	);

	res.render('users/index', {
		users: matchedUser
	});
});

app.get('/users/create', function (req, res) {
	res.render('users/create')
});

app.post('/users/create', function (req, res) {
	users.push(req.body);
	res.redirect('/users');
});

app.listen (port, () => console.log('Server listening at port: ' + port));