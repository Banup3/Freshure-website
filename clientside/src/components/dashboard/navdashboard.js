import { useState } from 'react';
import React, { useContext } from 'react';
import { CartContext } from '../cartcontext';
import { Link, useNavigate } from "react-router-dom";


const Dashboardnav = () => {
  const [profiledropdown, setprofiledropdown] = useState(false);
  
  const navigate = useNavigate();
  const { saveCartToBackend, clearCart, cartItems } = useContext(CartContext);

  const handleLogout = async () => {
  try {
    await saveCartToBackend();     
    clearCart();                   
    localStorage.removeItem("user");
         
    navigate("/login");            
  } catch (error) {
    console.error("Error during logout:", error);
    alert("Logout failed. Try again.");
  }
};


  const handleCartClick = () => {
    navigate("/cartpage");
  };

  const handleProfileClick = () => {
    setprofiledropdown(!profiledropdown);
  };

  return (
    <nav
      className="navbar navbar-expand-lg position-fixed top-0 start-0 w-100"
      style={{
        backgroundColor: "rgba(189, 219, 188, 0.6)",
        backdropFilter: "blur(5px)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        zIndex: "100",
        top:"0"
      }}
    >
      <div className="container p-2 d-flex justify-content-between align-items-center">
        <Link className="navbar-brand d-flex align-items-center" to="/dashboard">
          <img src="/assets/favicon.ico" style={{ height: "40px", marginRight: "10px" }} alt="Logo" />
          <span style={{ fontWeight: 'bolder', fontSize: '30px' }}>Freshure</span>
        </Link>

        <form className="d-flex" role="search" style={{ width: '500px' }}>
          <input className="form-control me-2" type="search" placeholder="Search for food items" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

        <ul className="navbar-nav d-flex flex-row gap-3 mb-0 align-items-center">
          <li className="nav-item">
            <button className="btn btn-link nav-link" onClick={handleCartClick} style={{fontWeight:'bold',color:"black",fontSize:"20px"}}>🛒 Cart({cartItems.length})</button>
          </li>
          
          <li className="nav-item">
            <div className="profile" onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
              <div className="avatar bg-dark text-white rounded-circle d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px' }}>
                You
              </div>
            </div>
            {profiledropdown && (
              <div className="dropdown-menu show" style={{ position: 'absolute', right: '20px', top: '70px' }}>
                <Link className="dropdown-item" to="/profile">Profile</Link>
                <button className="dropdown-item" onClick={handleLogout}>Logout</button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Dashboardnav;
