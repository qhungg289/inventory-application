const express = require("express");
const router = express.Router();

const Category = require("../models/Category");

router.get("/", (req, res, next) => {
	Category.find({}).exec((err, categories) => {
		if (err) {
			next(err);
		}

		res.render("categories", { title: "Categories", categories: categories });
	});
});

module.exports = router;
