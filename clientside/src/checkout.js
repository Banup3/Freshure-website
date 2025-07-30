import React, { useEffect, useState, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import Footer from './components/footer/footer';
import { CartContext } from './components/cartcontext'; // adjust path if needed

const Checkout = () => {
  const location = useLocation();
  const { cartItems } = useContext(CartContext); // Get all items from cart
  const baseTotal = location.state?.totalAmount || 0;

  const [finalAmount, setFinalAmount] = useState(baseTotal);
  const [discountText, setDiscountText] = useState([]);
  const [deliveryCharge, setDeliveryCharge] = useState(0);

 useEffect(() => {
  let subtotal = 0;
  let juiceItems = [];

  cartItems.forEach(item => {
    subtotal += item.price * item.quantity;

    if (item.name.toLowerCase().includes("juice")) {
      juiceItems.push({
        name: item.name,
        price: item.price,
        quantity: item.quantity
      });
    }
  });

  // 🍹 Buy 2 Get 1 Free on Juices (based on total juice count)
  let totalJuiceQty = juiceItems.reduce((sum, item) => sum + item.quantity, 0);
  let freeJuices = Math.floor(totalJuiceQty / 3);
  let juiceDiscount = 0;

  if (freeJuices > 0) {
    // Sort juices by price (low to high) to discount the cheapest ones
    const sortedJuices = [];
    juiceItems.forEach(item => {
      for (let i = 0; i < item.quantity; i++) {
        sortedJuices.push(item.price);
      }
    });
    sortedJuices.sort((a, b) => a - b);

    // Apply discount for cheapest freeJuices
    juiceDiscount = sortedJuices.slice(0, freeJuices).reduce((sum, price) => sum + price, 0);
    subtotal -= juiceDiscount;
  }

  // 🛍 20% OFF on First Order
  const isFirstOrder = true; // Replace with actual user check
  let firstOrderDiscount = 0;
  if (isFirstOrder) {
    firstOrderDiscount = subtotal * 0.2;
    subtotal -= firstOrderDiscount;
  }

  // 🚚 Free Delivery over ₹299
  let delivery = 0;
  if (subtotal >= 299) {
    delivery = 0;
  } else {
    delivery = 30;
    subtotal += 30;
  }

  const offers = [];
  if (juiceDiscount > 0) offers.push(`Buy 2 Get 1 Free on Juices: -₹${juiceDiscount}`);
  if (isFirstOrder) offers.push(`20% OFF on First Order: -₹${firstOrderDiscount.toFixed(2)}`);
  offers.push(delivery === 0 ? "Free Delivery (₹0)" : "Delivery Charge: ₹30");

  setDiscountText(offers);
  setDeliveryCharge(delivery);
  setFinalAmount(parseFloat(subtotal.toFixed(2)));
}, [cartItems]);


  const handlePayment = async () => {
    const res = await fetch("http://localhost:5000/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: finalAmount * 100 }) // Convert to paise
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Backend error:", errorText);
      return alert("Order creation failed");
    }

    const order = await res.json();

    const options = {
      key: "rzp_test_qQf2VddBHqQNZ4",
      amount: order.amount,
      currency: order.currency,
      name: "Freshure Store",
      description: "Order Payment",
      order_id: order.id,
      handler: function (response) {
        alert("Payment Successful!");
        console.log("Payment Response:", response);
      },
      prefill: {
        name: "Student Buyer",
        email: "student@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#4CAF50",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg position-fixed top-0 start-0 w-100"
        style={{
          backgroundColor: "rgba(189, 219, 188, 0.6)",
          backdropFilter: "blur(5px)",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          zIndex: "1000"
        }}
      >
        <div className="container p-2 d-flex justify-content-between align-items-center">
          <Link className="navbar-brand d-flex align-items-center" to="/dashboard">
            <img src="/assets/favicon.ico" style={{ height: "40px", marginRight: "10px" }} alt="Logo" />
            <span style={{ fontWeight: "bolder", fontSize: "30px" }}>Freshure</span>
          </Link>
        </div>
      </nav>

      <div style={{ paddingTop: "100px" }}></div>

      <div className="pt-20 min-h-screen bg-gradient-to-br from-green-100 to-white flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
            Checkout - Freshure Store
          </h2>

          <div className="mb-4 text-center">
            <p className="text-lg font-medium">Offers Applied:</p>
            <ul className="text-sm text-gray-700 list-none list-inside mb-2">
              {discountText.map((offer, index) => (
                <li key={index}>{offer}</li>
              ))}
            </ul>
          </div>

          <div className="text-center mb-6">
            <p className="text-lg font-medium">Final Amount:</p>
            <p className="text-2xl text-green-600 font-bold">₹{finalAmount}</p>
          </div>

          <div className="w-full flex justify-center text-center items-center mt-4">
  <button
    onClick={handlePayment}
    className="btn btn-primary bg-green-600 hover:bg-green-700 text-white mb-4 font-semibold py-3  rounded-lgw-[320px] text-center shadow-md transition duration-300"
  >
    Pay Now with Razorpay
  </button>
</div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
