// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact  -- save contact form
router.post('/', async (req, res) => {
  const { fullName, email, phone, message } = req.body;

  try {
    const contact = new Contact({ fullName, email, phone, message });
    await contact.save();
    return res.status(201).json({ success: true, contact });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
});

// GET /api/contact -- fetch all contacts (for admin use)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
