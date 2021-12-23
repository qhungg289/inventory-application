const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, maxlength: 150 },
});

// Virtual property for URL
CategorySchema.virtual("url").get(function () {
	return `/category/${this._id}`;
});

module.exports = mongoose.model("Category", CategorySchema);
