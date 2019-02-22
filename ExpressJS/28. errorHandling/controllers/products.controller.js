const Product = require('../models/product.model.js');

module.exports.index = async function (req, res, next) {
	// var page = parseInt(req.query.page) || 1;
	// var perPage = 8;

	// var begin = (page-1)*perPage;
	// var end = page*perPage;

	// res.render('products/index', {
	// 	products: db.get('products').value().slice(begin,end)
	// })
	try {
		var products = await Product.find();
		products.foo();
		res.render('products/index', {
			products: products
		});
	} catch (error) {
		next(error); // error will be transfer to next middleware to the end of stack (last middleware is express error handler)
	};
	
};