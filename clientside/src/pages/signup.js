import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Lognav from './lognav';
import Footer from '../components/footer/footer';
import './login.css'
import axios from 'axios';


const API_URL = process.env.REACT_APP_API_BASE_URL;

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(`${API_URL}/api/auth/register`, {
      name: email.split("@")[0], // just using email prefix as name
      email,
      password,
    });

    alert(res.data.message); // show success message
    navigate('/login');      // redirect to login
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || 'Signup failed');
  }
  };

  return (
    <>
    <Lognav/>
    <div className="auth-form" style={{ marginTop: '100px' }}>
      <h2>Sign up for Freshure</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Enter new Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/>
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/>
        <input
          type="phone number"
          placeholder="+91-xxxxxxxxxx"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}/>
        <button type="submit">Sign Up</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default Signup;
