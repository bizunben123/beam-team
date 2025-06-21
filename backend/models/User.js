const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['client', 'barber', 'admin'], default: 'client' },
  location: {
    lat: Number,
    lng: Number
  },
  subscription: {
    tier: { type: String, enum: ['Basic', 'Pro', 'Premium'], default: 'Basic' },
    expiresAt: Date
  },
  available: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);
