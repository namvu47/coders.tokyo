const db = require('../lowdb');

module.exports.login = function (req, res) {
	res.render('auth/login');
};

module.exports.postLogin = function (req, res) {
	var email = req.body.email;
	var pw = req.body.password;

	var user = db.get('users').find({ email: email }).value();
	if (!user) {
		res.render('auth/login', {
			errors: [
				'User does not exist'
			],
			values: req.body
		});
		return;
	} else if (user.password !== pw) {
		res.render('auth/login', {
			errors: [
				"User and password don't match"
			],
			values: req.body
		});
		return;
	} else {
		res.cookie('userId', user.id);
		res.redirect('/users');
	};
};