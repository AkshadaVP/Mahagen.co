const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Request', requestSchema);
