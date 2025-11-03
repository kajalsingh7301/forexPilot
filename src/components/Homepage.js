import React from "react";
import "./Homepage.css";
import Chatbot from "./Chatbot"; // Import the chatbot component

const Homepage = () => {
  const goToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <img src="/assets/logo.jpg" alt="Forex Pilot Logo" className="logo" />
        <button className="contact-btn" onClick={goToContact}>
          Contact Us
        </button>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            Automate Your Trades, <br /> Maximize <span>Your Profits</span>
          </h1>
          <p>
            Automate your strategies for 24/7 market analysis and execution,
            ensuring you never miss an opportunity. With advanced algorithms and
            real-time insights, our solution helps you maximize profits while
            minimizing risk.
          </p>
          <p className="how-it-works">How it works ⓘ</p>
          <button className="cta-btn">
            Start Your Free Trial for just $99!
          </button>
        </div>

        <div className="hero-image">
          <div className="phone-mockup">
            <img
              src="/assets/gif.gif"
              alt="Trading Animation"
              className="phone-gif"
            />
          </div>
        </div>
      </div>

      {/* Supported Platforms Section */}
      <div className="supported-platforms">
        <h2>Supported Platforms</h2>
        <div className="platform-logos">
          <img src="/assets/trade1.png" alt="MetaTrader 4" />
          <img src="/assets/trade2.png" alt="MetaTrader 5" />
          <img src="/assets/trade3.png" alt="cTrader" />
          <img src="/assets/trade4.png" alt="DXtrade" />
          <img src="/assets/trade5.png" alt="TradeLocker" />
        </div>
      </div>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Homepage;
