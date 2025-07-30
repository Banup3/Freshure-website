const express = require("express");
const router = express.Router();
const Order = require("../models/order");

// Save a new order
router.post("/", async (req, res) => {
  const { userId, items, amount, coupon, address } = req.body;

  try {
    const newOrder = new Order({
      userId,
      items,
      amount,
      coupon,
      address,
      createdAt: new Date(),
    });
    await newOrder.save();
    res.json({ message: "✅ Order saved successfully", order: newOrder });
  } catch (error) {
    console.error("❌ Error saving order:", error);
    res.status(500).json({ message: "Error saving order" });
  }
});

module.exports = router;
