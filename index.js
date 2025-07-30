const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const Razorpay = require("razorpay");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); // preferred over bodyParser.json()

// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
const userRoutes = require('./routes/user');
app.use("/api/user", userRoutes); // ✅ add this just like others


// Razorpay order route
app.post("/api/create-order", async (req, res) => {
  try {
    const { amount } = req.body;
    const options = {
      amount, // already multiplied in frontend
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    console.error("❌ Razorpay order error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/products"));
app.use("/api/payment", require("./routes/payments")); 

const cartRoutes = require('./routes/cart');
app.use('/api/cart', require("./routes/cart"));

const orderRoutes = require("./routes/orders");
app.use("/api/orders", orderRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
