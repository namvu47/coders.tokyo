const Product = require('../../models/product.model.js');
const User = require('../../models/user.model.js');

module.exports.index = async function (req, res) {
	var products = await Product.find();
	res.json(products);
};

module.exports.create = async function (req, res) {
	var product = await Product.create(req.body);
	res.json(product);
};

module.exports.put = async function (req, res) {
	Product.replaceOne (
		{ name: req.body.name }, 
		req.body, 
		{ new: true, upsert: true, setDefaultOnInsert: true },
		function (err, doc) {
			if (err) { res.status(500).json(err)};
			res.json(doc);
		});
		// .then ( doc => { res.json(doc) })
		// .catch (err => { res.status(500).json(err) }); 
};

module.exports.patch = async function (req, res) {
	var product = await Product.findOneAndUpdate ({ name: req.body.name }, req.body, { new: true });
	res.json(product);  

	// Product.findOneAndUpdate ({ name: req.body.name }, req.body, { new: true })
	// 	.then ( doc => { res.json(doc) })
	// 	.catch (err => { res.status(500).json(err) }); 	
};

module.exports.delete = async function (req, res) {
	Product.findOneAndRemove ({ name: req.body.name })
		.then ( doc => { res.json(doc) })
		.catch (err => { res.status(500).json(err) }); 
};