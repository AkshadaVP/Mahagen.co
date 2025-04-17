const express = require('express');
const router = express.Router();
const Request = require('../models/request');
require('dotenv').config();

const { clerkClient } = require('@clerk/clerk-sdk-node'); // ✅ Correct import
const nodemailer = require('nodemailer');

// ✅ POST: Save a new user request
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

// ✅ GET: Fetch all or filtered requests (e.g., ?status=pending)
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

// ✅ PUT: Approve or reject a request + create Clerk user + send email
router.put('/:id', async (req, res) => {
  const { status } = req.body;

  try {
    const request = await Request.findById(req.params.id);
    if (!request) return res.status(404).json({ error: 'Request not found' });

    // Update request status in MongoDB
    request.status = status;
    await request.save();
    console.log(`🔄 Request ${request.email} updated to ${status}`);

    // Only proceed if approved
    if (status === 'approved') {
      const tempPassword = Math.random().toString(36).slice(-8);
      console.log(`🔑 Temp password for ${request.email}: ${tempPassword}`);

      try {
        // ✅ Check if Clerk user already exists
        let createdUser;
        const existingUsers = await clerkClient.users.getUserList({ emailAddress: request.email });

        if (existingUsers.length > 0) {
          console.log('⚠️ User already exists in Clerk:', existingUsers[0].id);
          createdUser = existingUsers[0];
        } else {
          // ✅ Create new Clerk user
          createdUser = await clerkClient.users.createUser({
            emailAddress: [request.email],
            password: tempPassword,
            publicMetadata: { role: 'user' },
          });
          console.log('✅ Clerk user created:', createdUser.id);
        }

        // ✅ Email setup
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        // ✅ Compose mail
        const mailOptions = {
          from: `Mahajan.co <${process.env.EMAIL_USER}>`,
          to: request.email,
          subject: 'Your Mahajan.co Login Access',
          text: `🎉 You're approved!

Use these credentials to log in to Mahajan.co:

Email: ${request.email}
Temporary Password: ${tempPassword}

Login here: http://localhost:5173/sign-in

✅ Please change your password after logging in.`,
        };

        // ✅ Send email
        await transporter.sendMail(mailOptions);
        console.log(`📩 Email sent to ${request.email}`);

      } catch (clerkOrMailErr) {
        console.error('❌ Failed during Clerk or Email step:', clerkOrMailErr.message);
        return res.status(500).json({ error: 'User created, but email failed to send.' });
      }
    }

    res.json({ message: `Request ${status}` });
  } catch (err) {
    console.error('❌ Error:', err.message);
    res.status(500).json({ error: 'Failed to update status or send email' });
  }
});

module.exports = router;
