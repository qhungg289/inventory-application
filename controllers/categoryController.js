const async = require("async");

const Category = require("../models/Category");
const Item = require("../models/Item");

exports.categoryDetailGet = (req, res, next) => {
	async.parallel(
		{
			category: (callback) => {
				Category.findById(req.params.id).exec(callback);
			},
			items: (callback) => {
				Item.find({ category: req.params.id })
					.populate("category")
					.sort({ name: 1 })
					.exec(callback);
			},
		},
		(err, result) => {
			if (err) {
				next(err);
				return;
			}

			res.render("categoryDetail", {
				title: result.category.name,
				category: result.category,
				items: result.items,
			});
		}
	);
};

exports.categoryCreateGet = (req, res, next) => {
	res.render("categoryCreateForm", {
		title: "Create new category",
	});
};

exports.categoryCreatePost = (req, res, next) => {
	const category = new Category({
		name: req.body.name,
		description: req.body.description,
	});

	category.save((err, result) => {
		if (err) {
			next(err);
		}

		res.redirect(result.url);
	});
};

exports.categoryUpdateGet = (req, res, next) => {
	Category.findById(req.params.id).exec((err, result) => {
		if (err) {
			next(err);
			return;
		}

		res.render("categoryUpdateForm", {
			title: `Update category: ${result.name}`,
			category: result,
		});
	});
};

exports.categoryUpdatePost = (req, res, next) => {
	Category.findByIdAndUpdate(req.params.id, {
		name: req.body.name,
		description: req.body.description,
	}).exec((err, result) => {
		if (err) {
			next(err);
			return;
		}

		res.redirect(result.url);
	});
};
