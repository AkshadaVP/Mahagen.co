import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import fs from 'fs';
import http from 'http';
import https from 'https';
import 'dotenv/config';

import authRoutes from './routes/auth.js';
import formRoutes from './routes/formRoutes.js';
import uploadRoutes from './routes/upload.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/formdata', formRoutes);
app.use('/api/upload', uploadRoutes);

const PORT = process.env.PORT || 5000;

// 🔐 Only enable HTTPS in production
if (process.env.NODE_ENV === 'production') {
  const sslOptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/maha-genco.co.in/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/maha-genco.co.in/fullchain.pem'),
  };

  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log('✅ Connected to MongoDB');

      // HTTPS Server
      https.createServer(sslOptions, app).listen(PORT, () => {
        console.log(`🔐 HTTPS server running on https://maha-genco.co.in:${PORT}`);
      });

      // Optional HTTP → HTTPS redirect
      const redirectApp = express();
      redirectApp.get('*', (req, res) => {
        res.redirect(`https://${req.headers.host}${req.url}`);
      });
      http.createServer(redirectApp).listen(80, () => {
        console.log('🌐 Redirecting HTTP traffic to HTTPS');
      });
    })
    .catch(err => {
      console.error('❌ MongoDB Error:', err.message);
      process.exit(1);
    });
} else {
  // Localhost development (no HTTPS)
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log('✅ Connected to MongoDB');
      app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
      });
    })
    .catch(err => {
      console.error('❌ MongoDB Error:', err.message);
      process.exit(1);
    });
}

