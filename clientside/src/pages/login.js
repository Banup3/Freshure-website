import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Lognav from './lognav';
import Footer from '../components/footer/footer';
import './login.css'
import axios from 'axios';


const API_URL = process.env.REACT_APP_API_BASE_URL;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(`${API_URL}/api/auth/login`, 
 {
      email,
      password,
    });

    console.log('Login success:', res.data);

    // ✅ Save user and token FIRST
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));

    alert('Login successful!');

    // ✅ Then navigate
    navigate('/dashboard');
  } catch (err) {
    console.error('Login failed:', err.response?.data || err.message);
    alert('Invalid credentials');
  }
};

  return (
    <>
    <div>
    <Lognav/>
    </div>
    <div className="auth-form"style={{ marginTop: '100px' }}>
      <h2>Login to Freshure</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
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
        <button type="submit">Login</button>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default Login;
