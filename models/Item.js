const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, maxlength: 200 },
	price: { type: Number, required: true },
	numberInStock: { type: Number, required: true },
	category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

ItemSchema.virtual("url").get(function () {
	return `category/${this.category._id}/${this._id}`;
});

module.exports = mongoose.model("Item", ItemSchema);
