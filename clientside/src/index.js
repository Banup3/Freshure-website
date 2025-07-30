import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import Home from './components/home/home';
import Loginpage from './pages/login';
import Signup from './pages/signup';
import Dashboard from './components/dashboard/dashboard';
import Biryani from './components/dashboard/biryani';
import Rice from './components/dashboard/flavor';
import Roti from './components/dashboard/rotis';
import Curry from './components/dashboard/curries';
import Snacks from './components/dashboard/snack';

import { CartProvider } from './components/cartcontext'; // ✅ Import the provider
import CartPage from './components/cartpage';
import Checkout from './checkout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider> {/* ✅ Wrap your entire app */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/biryani" element={<Biryani />} />
        <Route path="/falvourrice" element={<Rice />} />
        <Route path="/roti" element={<Roti />} />
        <Route path="/curries" element={<Curry />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />

      </Routes>
    </BrowserRouter>
  </CartProvider>
);
