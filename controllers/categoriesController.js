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

exports.categoriesCreateGet = (req, res, next) => {
	res.render("categoryCreateForm", {
		title: "Create new category",
		nameInput: "",
		descInput: "",
	});
};

exports.categoriesCreatePost = (req, res, next) => {
	const category = new Category({
		name: req.body.name,
		description: req.body.description,
	});

	category.save((err, result) => {
		if (err) {
			next(err);
		}

		res.redirect("/categories");
	});
};
