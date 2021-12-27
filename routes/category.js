const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categoryController");

router.get("/create", categoryController.categoryCreateGet);

router.post("/create", categoryController.categoryCreatePost);

router.get("/:id", categoryController.categoryDetailGet);

router.get("/:id/update", categoryController.categoryUpdateGet);

router.post("/:id/update", categoryController.categoryUpdatePost);

router.get("/:id/delete", categoryController.categoryDeleteGet);

router.post("/:id/delete", categoryController.categoryDeletePost);

module.exports = router;
