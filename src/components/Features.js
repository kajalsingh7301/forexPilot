import React from "react";
import "./Features.css";
import { 
  FaRobot, FaStopCircle, FaChartLine, FaHandHoldingUsd, FaGlobe, FaNewspaper,
  FaClock, FaCogs, FaRocket, FaUsers, FaSignal, FaBell, FaShieldAlt, FaServer
} from "react-icons/fa";

const featuresData = [
  { icon: <FaRobot />, title: "Fully Automated Trading", desc: "ForexPilot Expert Advisor BOT operates 24/7, automatically executing trades without manual intervention, ensuring continuous market participation and seizing opportunities in both forex and gold markets." },
  { icon: <FaStopCircle />, title: "Advanced Stop Loss (SL) and Take Profit (TP) Management", desc: "Advanced SL and TP strategies allow dynamic adjustments, including trailing stops, to lock in profits while minimizing losses based on market movements." },
  { icon: <FaChartLine />, title: "Auto Move SL After Hitting First TP", desc: "Once the first Take Profit (TP) level is reached, ForexPilot automatically moves the Stop Loss (SL) to breakeven, protecting profits and reducing potential risk." },
  { icon: <FaHandHoldingUsd />, title: "Dynamic Trailing Stop", desc: "ForexPilot adjusts trailing stops as the market moves in your favor, securing profits while providing the opportunity to capture more significant market moves without the risk of losing gains." },
  { icon: <FaGlobe />, title: "Customizable Risk Management", desc: "Customize your risk parameters, including the percentage of the account balance per trade and maximum drawdown limits, allowing you to control risk according to your preferences." },
  { icon: <FaNewspaper />, title: "Multi-Timeframe Analysis", desc: "The BOT performs comprehensive market analysis across multiple timeframes, helping to determine the best trade entries and exits for improved decision-making." },
  { icon: <FaClock />, title: "Multi-Currency Pair Compatibility", desc: "Although optimized for forex and XAU/USD (gold), ForexPilot supports a variety of currency pairs, providing you with diverse trading opportunities across different markets." },
  { icon: <FaCogs />, title: "Economic News Integration", desc: "ForexPilot incorporates key economic news and events, adjusting trading decisions based on significant market movements triggered by news releases and economic data." },
  { icon: <FaRocket />, title: "Scalping and Swing Trading Strategies", desc: "ForexPilot is versatile, adapting to both scalping and swing trading techniques, ensuring you can take advantage of fast market fluctuations or longer trends for optimal returns." },
  { icon: <FaUsers />, title: "Comprehensive Backtesting and Optimization", desc: "Test your strategies using historical market data to ensure that they perform well in different market conditions, helping to optimize parameters for better live trading results." },
  { icon: <FaSignal />, title: "Smart Position Sizing", desc: "ForexPilot calculates the optimal position size based on your risk tolerance, ensuring that you don’t overexpose your account balance while maximizing potential profits." },
  { icon: <FaBell />, title: "Real-Time Alerts and Notifications", desc: "Stay updated with real-time trade alerts via email, SMS, or push notifications, notifying you of important trade actions, such as open positions, SL/TP hits, or market changes." },
  { icon: <FaShieldAlt />, title: "Built-In Drawdown Protection", desc: "To safeguard your trading capital, ForexPilot includes drawdown protection features, automatically adjusting the trading strategy to limit losses during unfavorable market conditions." },
  { icon: <FaServer />, title: "VPS Hosting Compatibility", desc: "ForexPilot is designed to run smoothly on Virtual Private Servers (VPS), ensuring uninterrupted trading execution without downtime, even if your computer is turned off." }
];

const Features = () => {
  return (
    <div className="features-container">
      <div className="features-header">
        <h2>A Powerful, All-in-one Forex Pilot</h2>
        <p>One compact solution can delight your forex journey and fuel your profit.</p>
      </div>
      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h4 className="feature-title">{feature.title}</h4>
            <p className="feature-desc">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
