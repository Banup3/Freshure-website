
const Razorpay = require('razorpay');
const express = require('express');
const router = express.Router();
require('dotenv').config(); 


const razorpay = new Razorpay({
  key_id:  process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.post('/orders', async (req, res) => {
  const options = {
    amount: req.body.amount , 
    currency: 'INR',
    receipt: `receipt_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).send('Error creating order');
  }
});

module.exports = router;
