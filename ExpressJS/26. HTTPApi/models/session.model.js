const mongoose = require('mongoose');

var sessionSchema = new mongoose.Schema({
	sessionCookie: String
})

var Session = mongoose.model('Session', sessionSchema, 'sessions');

module.exports = Session;