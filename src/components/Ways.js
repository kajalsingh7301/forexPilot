import React, { useState } from "react";
import "./Ways.css";
import { FaCog, FaCalculator, FaChartLine, FaClock } from "react-icons/fa";

const Ways = () => {
  const [activeTab, setActiveTab] = useState("lot");

  const renderContent = () => {
    switch (activeTab) {
      case "lot":
        return (
          <div className="ways-content">
            <div className="ways-image-box">
              <div className="mock-box">
                <div className="mock-row">Fixed Lot <span>0.5</span></div>
                <div className="mock-row">Money Amount Lot <span>$25</span></div>
                <div className="mock-row">Dynamic Lot <span>2%</span></div>
              </div>
            </div>
            <div className="ways-text">
              <h3>1. Lot Management</h3>
              <p>
                Set your fixed, money amount, or risk percentage lot sizes for each TP.  
                You can also set special lot sizes for your favourite pair.
              </p>
            </div>
          </div>
        );
      case "spread":
        return (
          <div className="ways-content row-reverse">
            <div className="ways-image-box">
              <div className="mock-box">
                <div className="mock-row">Bid <span>1.2345</span></div>
                <div className="mock-row">Ask <span>1.2349</span></div>
                <div className="mock-row highlight">Spread <span>0.4</span></div>
              </div>
            </div>
            <div className="ways-text">
              <h3>2. Accurate Spread Calculation</h3>
              <p>
                Get real-time spread calculations to improve your trading decisions  
                and manage risks effectively.
              </p>
            </div>
          </div>
        );
      case "trailing":
        return (
          <div className="ways-content">
            <div className="ways-image-box">
              <div className="mock-box">
                <div className="mock-row">Entry <span>1.2300</span></div>
                <div className="mock-row">SL <span>1.2280</span></div>
                <div className="mock-row">TP <span>1.2400</span></div>
              </div>
            </div>
            <div className="ways-text">
              <h3>3. Trailing SL-TP</h3>
              <p>
                Automatically trail your stop-loss and take-profit levels  
                to secure profits while reducing risks dynamically.
              </p>
            </div>
          </div>
        );
      case "time":
        return (
          <div className="ways-content row-reverse">
            <div className="ways-image-box">
              <div className="mock-box">
                <div className="mock-row">Session <span>London</span></div>
                <div className="mock-row">Start <span>08:00</span></div>
                <div className="mock-row">End <span>17:00</span></div>
              </div>
            </div>
            <div className="ways-text">
              <h3>4. Time Filter</h3>
              <p>
                Trade only during your preferred time frames by applying  
                advanced time filters to your strategies.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="ways-section">
      <h2 className="ways-title">
        4 Ways Forex Pilot Can <span>Boost Your Profit</span>
      </h2>

      {/* Icons Row */}
      <div className="ways-icons">
        <div
          className={`icon-item ${activeTab === "lot" ? "active" : ""}`}
          onClick={() => setActiveTab("lot")}
        >
          <div className="icon-circle pink"><FaCog /></div>
          <p>Lot Management</p>
        </div>

        <div
          className={`icon-item ${activeTab === "spread" ? "active" : ""}`}
          onClick={() => setActiveTab("spread")}
        >
          <div className="icon-circle dark"><FaCalculator /></div>
          <p>Accurate Spread Calculation</p>
        </div>

        <div
          className={`icon-item ${activeTab === "trailing" ? "active" : ""}`}
          onClick={() => setActiveTab("trailing")}
        >
          <div className="icon-circle dark"><FaChartLine /></div>
          <p>Trailing SL-TP</p>
        </div>

        <div
          className={`icon-item ${activeTab === "time" ? "active" : ""}`}
          onClick={() => setActiveTab("time")}
        >
          <div className="icon-circle dark"><FaClock /></div>
          <p>Time Filter</p>
        </div>
      </div>

      {/* Content Box */}
      {renderContent()}
    </div>
  );
};

export default Ways;
