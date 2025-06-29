const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  addedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Cart', CartSchema);
