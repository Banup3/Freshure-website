import React from 'react';
import { Link } from "react-router-dom";

function Lognav() {
  return (
    <nav
      className="navbar navbar-expand-lg position-absolute top-0 start-0 w-100"
      style={{ backgroundColor: "rgba(189, 219, 188, 0.6)",backdropFilter: "blur(5px)",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  zIndex: "1" }}
    >
      <div className="container p-2 d-flex justify-content-between align-items-center">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/assets/favicon.ico"
            style={{height:"40px",marginRight:"10px" }}
            alt="Logo"
          />
          <span style={{ fontWeight: 'bolder', fontSize: '30px' }}>Freshure</span>
        </Link>
        {/* <ul className="navbar-nav d-flex flex-row gap-3 mb-0">
          <li className="nav-item">
            <Link className="nav-link active" style={{ fontWeight: 'bold', fontSize: '18px' }} to="/login">
              Log-in
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" style={{ fontWeight: 'bold', fontSize: '18px' }} to="/signup">
              SignUp
            </Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
}

export default Lognav;
