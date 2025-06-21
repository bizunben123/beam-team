const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get('/', async (req, res) => {
  const barbers = await User.find({ role: 'barber' });
  res.json(barbers);
});

router.patch('/:id/availability', async (req, res) => {
  const barber = await User.findByIdAndUpdate(req.params.id, { available: req.body.available }, { new: true });
  res.json(barber);
});

module.exports = router;
