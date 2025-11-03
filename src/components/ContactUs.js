import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [success, setSuccess] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSuccess(""); // clear success message on change
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess("✅ Message Sent Successfully!");
        setFormData({ fullName: "", email: "", phone: "", message: "" });
      } else {
        const errData = await res.json();
        setSuccess("❌ Failed: " + (errData.error || "Server error"));
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSuccess("❌ Network error. Please try again.");
    }
  };

  return (
    <div id="contact" className="contact-wrapper">
      {/* Left Side */}
      <div className="contact-left">
        <h2>Send a Enquiry</h2>
        <div className="img">
          <img src="/assets/c1.png" alt="Contact Icon" className="imgclass" />
        </div>
      </div>

      {/* Right Side */}
      <div className="contact-right">
        <form onSubmit={handleSubmit}>
          <label>Your Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <label>Trade Enquiry</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send a Request</button>
          {success && <p className="success-msg">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;


