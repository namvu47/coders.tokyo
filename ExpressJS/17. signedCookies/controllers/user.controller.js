// MVC: controllers - contain all func from routes

const db = require('../lowdb');
const shortid = require('shortid');

module.exports.index = function (req, res) {
	res.render('users/index', {
		users: db.get('users').value()
	})
};

module.exports.search = function (req, res) {
	var q = req.query.q;
	var matchedUser = db.get('users').value().filter( user =>
		user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
	);

	res.render('/index', {
		users: matchedUser
	});
};

module.exports.create = function (req, res) {
	console.log(req.cookies);
	res.render('users/create')
};

module.exports.get = function (req, res) {
	var id = req.params.id;
	var user = db.get('users').find({ id: id }).value();
	res.render('users/view', {
		user: user
	});
};

module.exports.postCreate = function (req, res) {
	req.body.id = shortid.generate();
	db.get('users').push(req.body).write();
	res.redirect('/users');
	// res.send(db.get('users'));
};

