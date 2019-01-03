const express = require ('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

var users = [
	{ id: 1, name: "Mint" },
	{ id: 2, name: "Big" }
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

app.listen (port, () => console.log('Server listening at port: ' + port));