const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");

// ✅ GET: Fetch cart by userId
router.get("/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.json(cart || { userId: req.params.userId, items: [] });
  } catch (err) {
    console.error("❌ Error fetching cart:", err);
    res.status(500).json({ message: "Error fetching cart" });
  }
});

// ✅ POST: Save or update cart
router.post("/", async (req, res) => {
  const { userId, items } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    let cart = await Cart.findOne({ userId });
    if (cart) {
      cart.items = items;
      await cart.save();
    } else {
      cart = new Cart({ userId, items });
      await cart.save();
    }
    res.json({ message: "✅ Cart saved successfully", cart });
  } catch (err) {
    console.error("❌ Error saving cart:", err);
    res.status(500).json({ message: "Error saving cart" });
  }
});

module.exports = router;
