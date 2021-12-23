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
				desc: result.category.description,
				items: result.items,
			});
		}
	);
};
