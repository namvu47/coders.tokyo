const User = require('../models/user.model.js');

module.exports.login = function (req, res) {
	res.render('auth/login');
};

module.exports.postLogin = async function (req, res) {
	var email = req.body.email;
	var pw = req.body.password;

	var user = await User.find({ email: email });
	if (!user) {
		res.render('auth/login', {
			errors: [
				'User does not exist'
			],
			values: req.body
		});
		return;
	} else if (user[0].password !== pw) {
		res.render('auth/login', {
			errors: [
				"User and password don't match"
			],
			values: req.body
		});
		return;
	} else {
		res.cookie('sessionCookie', user[0].id, {
			signed: true
		});
		res.redirect('/users');
	};
};