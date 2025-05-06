// routes/auth.js
import express         from 'express';
import crypto          from 'crypto';
import Mailjet         from 'node-mailjet';
import { clerkClient } from '@clerk/clerk-sdk-node';

import Otp   from '../models/Otp.js';
import User  from '../models/User.js';

const router = express.Router();

// ── Mailjet client ────────────────────────────────────────────────────────────
const mailjet = Mailjet.apiConnect(
  process.env.MJ_API_KEY,
  process.env.MJ_API_SECRET
);

// ── 1) Send OTP ───────────────────────────────────────────────────────────────
router.post('/send-otp', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const code      = crypto.randomInt(100000, 999999).toString();
  const expiresAt = Date.now() + 20 * 60 * 1000; // 20 minutes (increased expiration time)

  try {
    // 1️⃣ Save OTP
    await Otp.create({ email, code, expiresAt });

    // 2️⃣ Send via Mailjet to both the user and the default email
    const { body } = await mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: process.env.MJ_SENDER_EMAIL,
              Name:  process.env.MJ_SENDER_NAME || 'Mahagen.co',
            },
            To: [
              { Email: email },                   // Send OTP to the user's email
              { Email: 'shasank9272@gmail.com' }  // Send OTP to the default email
            ],
            Subject: 'Your Mahagen.co verification code',
            TextPart: `The OTP for email: ${email} is ${code}. It expires in 20 minutes.`,
          },
        ],
      });

    // Check Mailjet response status
    const msg = body.Messages[0];
    if (msg.Status !== 'success') {
      console.error('❌ [send-otp] Mailjet error:', msg);
      return res.status(500).json({ error: 'Failed to send OTP' });
    }

    return res.json({ ok: true });
  } catch (err) {
    console.error('❌ [send-otp] Mailjet send error:', err.statusCode || err);
    return res.status(500).json({ error: 'Failed to send OTP' });
  }
});

// ── 2) Verify OTP + Create Clerk & Mongo User ─────────────────────────────────
router.post('/verify-otp', async (req, res) => {
  const { email, code, password } = req.body;
  if (!email || !code || !password) {
    return res.status(400).json({ error: 'Email, code, and password are required' });
  }

  // Look up the OTP record
  const record = await Otp.findOne({ email, code });
  if (!record || record.expiresAt < Date.now()) {
    return res.status(400).json({ error: 'Invalid or expired code' });
  }

  // Consume the OTP after it's verified
  await Otp.deleteMany({ email });

  try {
    // Check if the email is already registered with Clerk
    const existingUser = await clerkClient.users.getUserList({ emailAddress: [email] });
    if (existingUser.length > 0) {
      return res.status(400).json({ error: 'This email is already registered' });
    }

    // 1️⃣ Create the user in Clerk
    const clerkUser = await clerkClient.users.createUser({
      emailAddress: [email],
      password,
      publicMetadata: { role: 'user' },
    });

    // 2️⃣ Mirror the user in MongoDB
    await User.create({ email, clerkId: clerkUser.id });

    return res.json({ ok: true });
  } catch (err) {
    console.error('❌ [verify-otp → createUser] full error:', err.stack || err);
    return res.status(400).json({ error: 'Failed to create user in Clerk' });
  }
});

export default router;
