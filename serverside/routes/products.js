// routes/productRoutes.js
const express = require("express");
const router = express.Router();

// Example product route
router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Apple Juice", price: 50 },
    { id: 2, name: "Orange Juice", price: 60 },
  ]);
});

module.exports = router;
