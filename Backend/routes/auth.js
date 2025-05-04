// routes/auth.js
import express          from 'express';
import crypto           from 'crypto';
import { clerkClient }  from '@clerk/clerk-sdk-node';
import nodemailer       from 'nodemailer';

import Otp              from '../models/Otp.js';
import User             from '../models/User.js';    // ← NEW

const router = express.Router();

// ── SMTP transport ───────────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,  // your Gmail address
    pass: process.env.SMTP_PASS   // app password if 2FA enabled
  }
});

// VERIFY TRANSPORTER ON STARTUP
transporter
  .verify()
  .then(() => console.log('✅ SMTP transporter is ready'))
  .catch(err => console.error('❌ SMTP transporter error:', err));

// ── 1) Send OTP ──────────────────────────────────────────────────────────────
router.post('/send-otp', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const code      = crypto.randomInt(100000, 999999).toString();
  const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes

  try {
    // persist the OTP record
    await Otp.create({ email, code, expiresAt });

    // email it out
    await transporter.sendMail({
      from:    process.env.SMTP_USER,
      to:      email,
      subject: 'Your Mahagen.co verification code',
      text:    `Your OTP is ${code}. It expires in 10 minutes.`
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error('❌ [send-otp] full error:', err.stack || err);
    return res.status(500).json({ error: 'Failed to send OTP' });
  }
});

// ── 2) Verify OTP & Create Clerk User + local Mongo user ────────────────────
router.post('/verify-otp', async (req, res) => {
  const { email, code, password } = req.body;
  if (!email || !code || !password) {
    return res.status(400).json({ error: 'Email, code and password are required' });
  }

  // look up the OTP record
  const record = await Otp.findOne({ email, code });
  if (!record || record.expiresAt < Date.now()) {
    return res.status(400).json({ error: 'Invalid or expired code' });
  }

  // consume it
  await Otp.deleteMany({ email });

  try {
    // 1️⃣ Create the user in Clerk
    const clerkUser = await clerkClient.users.createUser({
      emailAddress: [email],
      password,
      publicMetadata: { role: 'user' }
    });

    // 2️⃣ Mirror it into your local MongoDB users collection
    await User.create({
      email:   email,
      clerkId: clerkUser.id
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error('❌ [verify-otp → createUser] full error:', err.stack || err);
    return res.status(400).json({ error: 'This email is already registered' });
  }
});

export default router;
