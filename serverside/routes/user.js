// routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/user'); // adjust path as needed

// GET /api/user/:id → Get user info with isFirstOrder
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({
      name: user.name,
      email: user.email,
      isFirstOrder: user.isFirstOrder,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
