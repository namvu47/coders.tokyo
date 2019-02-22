const Product = require('../models/product.model.js');

module.exports.index = async function (req, res) {
	// var page = parseInt(req.query.page) || 1;
	// var perPage = 8;

	// var begin = (page-1)*perPage;
	// var end = page*perPage;

	// res.render('products/index', {
	// 	products: db.get('products').value().slice(begin,end)
	// })

	var products = await Product.find();
	res.render('products/index', {
		products: products
	});
};