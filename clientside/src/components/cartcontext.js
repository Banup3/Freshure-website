import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CartContext = createContext();
const API_URL = process.env.REACT_APP_API_BASE_URL;

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user._id) {
      setUserId(user._id);
    } else {
      setUserId(null);
      setCartItems([]);
    }
  }, []);

  // ✅ Fetch Cart
  useEffect(() => {
    if (!userId) return;

    const fetchCart = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/cart/${userId}`);
        setCartItems(res.data.items || []);
      } catch (err) {
        console.error("❌ Error fetching cart:", err);
      }
    };

    fetchCart();
  }, [userId]);

  // ✅ Auto-save Cart
  useEffect(() => {
    if (!userId) return;

    const saveCart = async () => {
      try {
        await axios.post(`${API_URL}/api/cart`, {
          userId,
          items: cartItems,
        });
        console.log("✅ Cart auto-saved");
      } catch (err) {
        console.error("❌ Error saving cart:", err);
      }
    };

    saveCart();
  }, [cartItems, userId]);

  const addToCart = (item) => {
    const exists = cartItems.find(i => i.id === item.id);
    if (exists) {
      setCartItems(prev =>
        prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        )
      );
    } else {
      setCartItems(prev => [...prev, { ...item }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const saveCartToBackend = async () => {
    if (!userId) return;

    try {
      await axios.post(`${API_URL}/api/cart`, {
        userId,
        items: cartItems,
      });
      console.log("✅ Cart saved to backend");
    } catch (err) {
      console.error("❌ Error saving cart to backend:", err);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        saveCartToBackend,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
