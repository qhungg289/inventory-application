const Category = require("../models/Category");

const gradient = [
	"linear-gradient(137deg, rgba(215,125,236,1) 0%, rgba(0,212,255,1) 100%)",
	"linear-gradient(137deg, rgba(236,192,125,1) 0%, rgba(255,135,240,1) 100%)",
	"linear-gradient(137deg, rgba(123,255,155,1) 0%, rgba(165,135,255,1) 100%)",
	"linear-gradient(137deg, rgba(255,108,108,1) 0%, rgba(255,248,54,1) 100%)",
	"linear-gradient(137deg, rgba(218,108,255,1) 0%, rgba(255,54,54,1) 100%)",
	"linear-gradient(137deg, rgba(108,255,241,1) 0%, rgba(255,54,54,1) 100%)",
	"linear-gradient(137deg, rgba(29,255,225,1) 0%, rgba(255,156,235,1) 100%)",
];

exports.categoriesListGet = (req, res, next) => {
	Category.find({}).exec((err, categories) => {
		if (err) {
			next(err);
		}

		res.render("categoriesList", {
			title: "Categories",
			categories: categories,
			gradient: gradient,
		});
	});
};
