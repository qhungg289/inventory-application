const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categoryController");

router.get("/:id", categoryController.categoryDetailGet);

router.get("/:id/update", (req, res, next) => {
	res.send(`GET_UPDATE_CATEGORY_FORM: ${req.params.id}`);
});

router.post("/:id/update", (req, res, next) => {
	res.send(`POST_UPDATE_CATEGORY_FORM: ${req.params.id}`);
});

module.exports = router;
