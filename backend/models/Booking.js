const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  barber: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  startLocation: {
    lat: Number,
    lng: Number
  },
  endLocation: {
    lat: Number,
    lng: Number
  },
  price: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
