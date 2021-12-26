const async = require("async");

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
	const item = new Item(req.body);

	item.save((err, result) => {
		if (err) {
			next(err);
			return;
		}

		res.redirect(result.url);
	});
};

exports.itemUpdateGet = (req, res, next) => {
	async.parallel(
		{
			categories: (callback) => {
				Category.find({}).exec(callback);
			},
			item: (callback) => {
				Item.findById(req.params.id).exec(callback);
			},
		},
		(err, result) => {
			if (err) {
				next(err);
				return;
			}

			res.render("itemUpdateForm", {
				title: `Update item: ${result.item.name}`,
				item: result.item,
				categories: result.categories,
			});
		}
	);
};

exports.itemUpdatePost = (req, res, next) => {
	Item.findByIdAndUpdate(req.params.id, req.body).exec((err, result) => {
		if (err) {
			next(err);
			return;
		}

		res.redirect(result.url);
	});
};

exports.itemDeleteGet = (req, res, next) => {
	Item.findById(req.params.id).exec((err, result) => {
		if (err) {
			next(err);
			return;
		}

		res.render("itemDeleteForm", {
			title: `Delete item: ${result.name}`,
			item: result,
		});
	});
};

exports.itemDeletePost = (req, res, next) => {
	Item.deleteOne({ _id: req.body.id }).exec((err, result) => {
		if (err) {
			next(err);
			return;
		}

		res.redirect("/");
	});
};
