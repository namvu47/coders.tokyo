// MVC: controllers - contain all func from routes

const User = require('../models/user.model.js');

module.exports.index = async function (req, res) {
	var users = await User.find()
	res.render('users/index', {
		users: users
	})
};

module.exports.search = async function (req, res) {
	var users = await User.find();
	var q = req.query.q;
	var matchedUser = users.filter( user =>
		user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
	);

	res.render('users/index', {
		users: matchedUser
	});
};

module.exports.create = function (req, res) {
	res.render('users/create')
};

module.exports.get = async function (req, res) {
	var id = req.params.id;
	var user = await User.find({ _id: id });
	res.render('users/view', {
		user: user[0]
	});
};

module.exports.postCreate = function (req, res) {
	req.body.avatar = req.file.path.split('/').slice(1).join('/');
	var newUser = new User (req.body);

	 // newUser.save()
		//  .then(item => {
		//  res.send("item saved to database");
		//  })
		//  .catch(err => {
		//  res.status(400).send("unable to save to database");
		//  });

	newUser.save(function (err) {
		if (err) return handleErr(err);
	});
	
	res.redirect('/users');
	// res.send(db.get('users'));
};

