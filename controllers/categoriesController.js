const Category = require("../models/Category");

exports.categoriesListGet = (req, res, next) => {
	Category.find({}).exec((err, categories) => {
		if (err) {
			next(err);
		}

		res.render("categoriesList", {
			title: "Categories",
			categories: categories,
		});
	});
};
