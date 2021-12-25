const express = require("express");
const router = express.Router();

const categoriesController = require("../controllers/categoriesController");

router.get("/", categoriesController.categoriesListGet);

router.get("/create", categoriesController.categoriesCreateGet);

router.post("/create", categoriesController.categoriesCreatePost);

module.exports = router;
