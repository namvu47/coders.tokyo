const User = require('../models/session.model.js');

module.exports.requireAuth = async function (req, res, next) {
	var user = await User.findOne({ _id: req.signedCookies.sessionCookie });

	if ((!req.signedCookies.sessionCookie) || (!user)) {
		res.redirect('/auth/login');
		return;
	};

	res.locals.user = user;

	next();
};