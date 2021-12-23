const Item = require("../models/Item");

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
