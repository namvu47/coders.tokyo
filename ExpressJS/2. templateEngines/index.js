const express = require ('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');


app.get('/', (req, res) => res.render('index',{
	name: "Mint"
}));

app.get('/users', (req, res) => res.render('users/index', {
	users: [
		{ id: 1, name: "Mint" },
		{ id: 2, name: "Big" }
	]
}));

app.listen (port, () => console.log('Server listening at port: ' + port));