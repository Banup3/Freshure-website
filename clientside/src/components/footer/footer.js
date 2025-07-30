import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src='/assets/favicon.ico' style={{width:'8%',marginRight:'50px'}}></img>
        <h1>Freshure</h1>
        <p className="copyright" style={{marginLeft:'50px'}}>&copy; 2025 Freshure. All rights reserved.</p>

        <div className="footer-columns">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Freshure Corporate</a></li>
              <li><a href="#">Achievements</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul>
              <li><a href="#">Help & Support</a></li>
              <li><a href="#">Partner with Us</a></li>
              <li><a href="#">Ride with Us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Cookies</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
