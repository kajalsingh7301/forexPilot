import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import Products from "./components/Products";
import Ways from "./components/Ways";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Features from "./components/Features";
import AdminContacts from "./components/AdminContacts"; // ✅ import admin page

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Homepage />
              <Products />
              <Ways />
              <ContactUs />
              <Footer />
            </>
          }
        />

        {/* Features page */}
        <Route path="/features" element={<Features />} />

        {/* Admin Contacts page */}
        <Route path="/admin-contacts" element={<AdminContacts />} /> {/* ✅ new route */}
      </Routes>
    </Router>
  );
}

export default App;
