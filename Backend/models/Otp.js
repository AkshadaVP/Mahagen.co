// models/Otp.js
import mongoose from 'mongoose';

const otpSchema = new mongoose.Schema({
  email:     { type: String, required: true, index: true },
  code:      { type: String, required: true },
  expiresAt: { type: Number, required: true },
}, {
  timestamps: true
});

export default mongoose.model('Otp', otpSchema);
