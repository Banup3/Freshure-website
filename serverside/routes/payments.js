// routes/payment.js
const Razorpay = require('razorpay');
const express = require('express');
const router = express.Router();

const razorpay = new Razorpay({
  key_id: 'rzp_test_i1oS1yqKdDOA3v',
  key_secret: '47CNoESLnqsTjwuRJrW34cW9',
});

router.post('/create-order', async (req, res) => {
  const options = {
    amount: req.body.amount * 100, // convert to paise
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
