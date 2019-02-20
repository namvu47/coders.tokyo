module.exports.postCreate = function function_name(req, res, next) {
	var errors = [];
	if (!req.body.name) {
		errors.push ("Name required")
	};
	if (!req.body.phone) {
		errors.push("Phone required")
	};
	if (errors.length) {
		res.render('users/create', {
			errors: errors,
			values: req.body
		});
		return;
	};

	next();
}