// routes/auth.js
import express from 'express';
import crypto from 'crypto';
import Mailjet from 'node-mailjet';
import { clerkClient } from '@clerk/clerk-sdk-node'; // ✅ Correct SDK

import Otp from '../models/Otp.js';
import User from '../models/User.js';

const router = express.Router();

// ── Mailjet Setup ──────────────────────────────────────────────
const mailjet = Mailjet.apiConnect(
  process.env.MJ_API_KEY,
  process.env.MJ_API_SECRET
);

// ── 1) Send OTP ────────────────────────────────────────────────
router.post('/send-otp', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });

  const code = crypto.randomInt(100000, 999999).toString();
  const expiresAt = Date.now() + 20 * 60 * 1000; // 20 minutes

  try {
    await Otp.create({ email, code, expiresAt });

    const { body } = await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: process.env.MJ_SENDER_EMAIL,
            Name: process.env.MJ_SENDER_NAME || 'Mahagen.co',
          },
          To: [
            { Email: email },
            { Email: 'shasank9272@gmail.com' }
          ],
          Subject: 'Your Mahagen.co verification code',
          TextPart: `The OTP for email: ${email} is ${code}. It expires in 20 minutes.`,
        },
      ],
    });

    const msg = body.Messages[0];
    if (msg.Status !== 'success') {
      console.error('❌ [send-otp] Mailjet error:', msg);
      return res.status(500).json({ error: 'Failed to send OTP' });
    }

    return res.json({ ok: true });
  } catch (err) {
    console.error('❌ [send-otp] Error:', err);
    return res.status(500).json({ error: 'Failed to send OTP' });
  }
});

// ── 2) Verify OTP & Create User ─────────────────────────────────
router.post('/verify-otp', async (req, res) => {
  const { email, code, password } = req.body;
  if (!email || !code || !password)
    return res.status(400).json({ error: 'Email, code, and password are required' });

  const record = await Otp.findOne({ email, code });
  if (!record || record.expiresAt < Date.now())
    return res.status(400).json({ error: 'Invalid or expired code' });

  await Otp.deleteMany({ email });

  try {
    const existingUsers = await clerkClient.users.getUserList({ emailAddress: [email] });
    if (existingUsers.length > 0) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const clerkUser = await clerkClient.users.createUser({
      emailAddress: [email],
      password,
      publicMetadata: { role: 'user' },
    });

    await User.create({ email, clerkId: clerkUser.id });

    return res.json({ ok: true });
  } catch (err) {
    console.error('❌ [verify-otp] Error:', err);
    return res.status(400).json({ error: 'Failed to create user' });
  }
});

export default router;

