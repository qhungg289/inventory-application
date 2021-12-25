const Item = require("../models/Item");
const Category = require("../models/Category");

exports.itemDetailGet = (req, res, next) => {
	Item.findById(req.params.id)
		.populate("category")
		.exec((err, result) => {
			if (err) {
				next(err);
			}

			res.render("itemDetail", { title: result.name, item: result });
		});
};

exports.itemCreateGet = (req, res, next) => {
	Category.find({}).exec((err, result) => {
		if (err) {
			next(err);
			return;
		}

		res.render("itemCreateForm", {
			title: "Create new item",
			categories: result,
		});
	});
};

exports.itemCreatePost = (req, res, next) => {
	const item = new Item({
		name: req.body.name,
		description: req.body.description,
		price: req.body.price,
		numberInStock: req.body.stock,
		category: req.body.category,
	});

	item.save((err, result) => {
		if (err) {
			next(err);
			return;
		}

		res.redirect(result.url);
	});
};
