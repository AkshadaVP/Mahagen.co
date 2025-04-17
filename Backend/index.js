const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // ✅ Load .env file

const { clerkClient } = require('@clerk/backend'); // ✅ Automatically uses .env key

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes
const requestRoutes = require('./routes/requestRoutes');
app.use('/api/requests', requestRoutes);

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connected to MongoDB Atlas');

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error('❌ MongoDB Connection Error:', err.message);
});

// Optional: Export clerkClient if needed elsewhere
module.exports = { clerkClient };
