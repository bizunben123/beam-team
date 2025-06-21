const express = require('express');
const Subscription = require('../models/Subscription');

const router = express.Router();

router.get('/', async (req, res) => {
  const plans = await Subscription.find();
  res.json(plans);
});

router.post('/', async (req, res) => {
  const plan = await Subscription.create(req.body);
  res.status(201).json(plan);
});

router.put('/:id', async (req, res) => {
  const plan = await Subscription.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(plan);
});

module.exports = router;
