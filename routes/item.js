const express = require("express");
const router = express.Router();

const itemController = require("../controllers/itemController");

// Create new item
router.get("/create", itemController.itemCreateGet);

router.post("/create", itemController.itemCreatePost);

// Get item detail
router.get("/:id", itemController.itemDetailGet);

// Update item detail
router.get("/:id/update", (req, res, next) => {
	res.send("get_update_item_form");
});

router.post("/:id/update", (req, res, next) => {
	res.send("post_update_item_form");
});

// Delete item
router.get("/:id/delete", (req, res, next) => {
	res.send("get_delete_item_form");
});

router.post("/:id/delete", (req, res, next) => {
	res.send("post_delete_item_form");
});

module.exports = router;
