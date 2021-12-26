const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categoryController");

router.get("/create", categoryController.categoryCreateGet);

router.post("/create", categoryController.categoryCreatePost);

router.get("/:id", categoryController.categoryDetailGet);

router.get("/:id/update", categoryController.categoryUpdateGet);

router.post("/:id/update", categoryController.categoryUpdatePost);

router.get("/:id/delete", (req, res, next) => {
	res.send(`GET_DELETE_CATEGORY_FORM: ${req.params.id}`);
});

router.post("/:id/delete", (req, res, next) => {
	res.send(`POST_DELETE_CATEGORY_FORM: ${req.params.id}`);
});

module.exports = router;
