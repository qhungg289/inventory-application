const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, maxlength: 200 },
	price: { type: Number, required: true },
	numberInStock: { type: Number, required: true },
	category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

// Virtual property for URL
ItemSchema.virtual("url").get(function () {
	return `${this.category._id}/item/${this._id}`;
});

module.exports = mongoose.model("Item", ItemSchema);
