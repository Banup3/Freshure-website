const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  id: { type: String, required: true },       // Product ID or SKU
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  img: { type: String },                      // optional
});

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,      // Better than raw string
    ref: "User",
    required: true,
    unique: true,
  },
  items: [cartItemSchema],
});

module.exports = mongoose.model("Cart", cartSchema);
