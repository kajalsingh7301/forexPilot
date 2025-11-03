import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src="/assets/logo.jpg" alt="Forex Pilot Logo" />
          {/* <span>FOREX PILOT</span> */}
        </div>

        {/* Links Section */}
        <div className="footer-links">
          {/* Important Links */}
          <div className="links-section">
            <h4>IMPORTANT LINKS</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Links */}
          <div className="links-section">
            <h4>CONTACTS</h4>
            <ul>
              <li><a href="mailto:support@forexpilot.info">support@forexpilot.info</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Telegram</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="links-section">
            <h4>FOLLOW US ON</h4>
            <ul>
              <li><a href="#">Telegram</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="footer-disclaimer">
        Forex Pilot provides automated Forex Expert Advisor (EA) products designed to execute trades on your account based on technical analysis. Our products work automatically to analyze the market and place trades, but please note that they do not guarantee profits and are subject to market risks. Please ensure that you seek independent financial advice if needed before making any investment decisions.
      </p>

      {/* Copyright */}
      <p className="footer-copy">© 2025 Forex Pilot</p>
    </footer>
  );
};

export default Footer;
