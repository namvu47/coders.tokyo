var shortid = require('shortid');

var db = require('../lowdb');

module.exports.sendMoney = function (req, res) {
	res.render('transfer/create')
};

module.exports.postCreate = function (req, res) {
	req.body.id = shortid.generate();
	db.get('transfer').push(req.body).write();
	res.redirect('/transfer');
}