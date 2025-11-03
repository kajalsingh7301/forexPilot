import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  // Predefined Q&A
  const predefinedAnswers = {
    "what is your service?":
      "We provide automated trading solutions to maximize your profits.",
    "how can i start a trial?":
      "You can start a free trial by clicking on 'Start Your Free Trial' button on the homepage.",
    "which platforms do you support?":
      "We support MetaTrader 4, MetaTrader 5, cTrader, DXtrade, and TradeLocker.",
    "how to contact support?": "Click on 'Contact Us' button or use our contact form."
  };

  const questions = Object.keys(predefinedAnswers); // Array of questions

  const handleSend = (customInput) => {
    const messageText = customInput || input;
    if (!messageText) return;

    setMessages([...messages, { from: "user", text: messageText }]);

    const answer =
      predefinedAnswers[messageText.toLowerCase()] ||
      "Sorry, I don't have an answer for that.";

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: answer }]);
    }, 500);

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className={`chatbot-wrapper ${open ? "open" : ""}`}>
      {!open && (
        <div className="chatbot-icon" onClick={() => setOpen(true)}>
          💬
        </div>
      )}

      {open && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            Chat with us
            <span className="close-btn" onClick={() => setOpen(false)}>
              ✕
            </span>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.from === "bot" ? "bot" : "user"}`}
              >
                {msg.text}
              </div>
            ))}

            {/* Predefined questions as buttons */}
            <div className="predefined-questions">
              {questions.map((q, idx) => (
                <button key={idx} onClick={() => handleSend(q)}>
                  {q}
                </button>
              ))}
            </div>
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={() => handleSend()}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
