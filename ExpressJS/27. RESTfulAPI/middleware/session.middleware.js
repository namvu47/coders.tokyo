const shortid = require('shortid');
const Session = require('../models/session.model.js');

module.exports = function (req, res, next) {
	if (!req.signedCookies.sessionCookie) {
		var sessionCookie = shortid.generate();
		res.cookie('sessionCookie', sessionCookie, {
			signed: true
		});

		var newSession = new Session ({ sessionCookie: sessionCookie });

		newSession.save(function (err) {
			if (err) return handleErr(err);
		});
	};

	next();
}