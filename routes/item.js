const express = require("express");
const router = express.Router();

const itemController = require("../controllers/itemController");

// Create new item
router.get("/create", itemController.itemCreateGet);

router.post("/create", itemController.itemCreatePost);

// Get item detail
router.get("/:id", itemController.itemDetailGet);

// Update item detail
router.get("/:id/update", itemController.itemUpdateGet);

router.post("/:id/update", itemController.itemUpdatePost);

// Delete item
router.get("/:id/delete", itemController.itemDeleteGet);

router.post("/:id/delete", itemController.itemDeletePost);

module.exports = router;
