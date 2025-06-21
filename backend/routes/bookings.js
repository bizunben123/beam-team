const express = require('express');
const Booking = require('../models/Booking');
const User = require('../models/User');
const haversine = require('../utils/haversine');

const router = express.Router();

router.post('/', async (req, res) => {
  const { clientId, barberId, startLocation, endLocation } = req.body;
  const distance = haversine(startLocation, endLocation);
  const price = distance * 2; // simple pricing
  const booking = await Booking.create({ client: clientId, barber: barberId, startLocation, endLocation, price });
  res.status(201).json({ booking, distance, price });
});

router.get('/barber/:barberId', async (req, res) => {
  const bookings = await Booking.find({ barber: req.params.barberId });
  res.json(bookings);
});

module.exports = router;
