var shortid = require('shortid');

var db = require('../lowdb');

module.exports.sendMoney = function (req, res) {
	res.render('transfer/create', { csrfToken: req.csrfToken() })
};

module.exports.postsendMoney = function (req, res) {
	var data = {
		id: shortid.generate(),
		amount: parseInt(req.body.amount),
		account: req.body.account,
		userId: req.signedCookies.userId
	};
	db.get('transfer').push(data).write();
	res.redirect('/transfer');
}