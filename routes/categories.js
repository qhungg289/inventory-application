const express = require("express");
const router = express.Router();

const categoriesController = require("../controllers/categoriesController");

router.get("/", categoriesController.categoriesListGet);

module.exports = router;
