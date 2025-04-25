// routes/requestRoutes.js
const express = require('express');
const router = express.Router();
const Request = require('../models/request');
require('dotenv').config();

const { clerkClient } = require('@clerk/clerk-sdk-node');
// If Node <18, uncomment for fetch polyfill:
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

router.post('/', async (req, res) => {
  const { name, email } = req.body;
  try {
    const newRequest = new Request({ name, email });
    await newRequest.save();
    res.status(201).json({ message: 'Request submitted' });
  } catch (err) {
    console.error('❌ Error while saving request:', err.message);
    res.status(400).json({ error: 'Email already used or something went wrong.' });
  }
});

router.get('/', async (req, res) => {
  const { status } = req.query;
  const filter = status ? { status } : {};
  try {
    const requests = await Request.find(filter);
    res.json(requests);
  } catch (err) {
    console.error('❌ Error while fetching requests:', err.message);
    res.status(500).json({ error: 'Failed to fetch requests' });
  }
});

router.put('/:id', async (req, res) => {
  const { status } = req.body;

  try {
    const request = await Request.findById(req.params.id);
    if (!request) return res.status(404).json({ error: 'Request not found' });

    request.status = status;
    await request.save();
    console.log(`🔄 Request ${request.email} updated to ${status}`);

    if (status === 'approved') {
      const tempPassword = Math.random().toString(36).slice(-8);
      console.log(`🔑 Temp password for ${request.email}: ${tempPassword}`);

      // Clerk user creation
      let createdUser;
      const existingUsers = await clerkClient.users.getUserList({ emailAddress: request.email });
      if (existingUsers.length > 0) {
        console.log('⚠️ User already exists in Clerk:', existingUsers[0].id);
        createdUser = existingUsers[0];
      } else {
        createdUser = await clerkClient.users.createUser({
          emailAddress: [request.email],
          password: tempPassword,
          publicMetadata: { role: 'user' },
        });
        console.log('✅ Clerk user created:', createdUser.id);
      }

      // email content
      const emailContent = `
        <h1>🎉 You're approved!</h1>
        <p>Use these credentials to log in to Mahajan.co:</p>
        <p><strong>Email:</strong> ${request.email}</p>
        <p><strong>Temporary Password:</strong> ${tempPassword}</p>
        <p><a href="http://localhost:5173/sign-in">Login here</a></p>
        <p>✅ Please change your password after logging in.</p>
      `;

      // call your hard-coded email API
      const emailApiResponse = await fetch(
        'https://confirmation-api.onrender.com/send-email',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            to: request.email,
            subject: 'Your Mahajan.co Login Access',
            htmlContent: emailContent,
          }),
        }
      );

      if (!emailApiResponse.ok) {
        throw new Error(`Email API responded with status: ${emailApiResponse.status}`);
      }
      console.log(`📩 Email sent to ${request.email} via API`);
    }

    res.json({ message: `Request ${status}` });
  } catch (err) {
    console.error('❌ Error in PUT /:id:', err.message);
    res.status(500).json({ error: 'Failed to update status or send email' });
  }
});

module.exports = router;
