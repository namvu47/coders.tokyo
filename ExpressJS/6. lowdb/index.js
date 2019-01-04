const express = require ('express');
const app = express();
const bodyParser = require('body-parser');

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

const port = 3000;

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [] })
  .write()

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.get('/', (req, res) => res.render('index',{
	name: "Mint"
}));

app.get('/users', (req, res) => res.render('users/index', {
	users: db.get('users').value()
}));

app.get('/users/search', function (req, res) {
	var q = req.query.q;
	var matchedUser = db.get('users').value().filter( user =>
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
	db.get('users').push(req.body);
	// res.redirect('/users');
	res.send(db.get('users'));
});

app.listen (port, () => console.log('Server listening at port: ' + port));