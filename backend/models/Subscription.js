const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  tier: { type: String, enum: ['Basic', 'Pro', 'Premium'] },
  price: Number,
  features: [String]
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
