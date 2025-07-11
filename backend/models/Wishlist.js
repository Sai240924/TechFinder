const mongoose = require('mongoose');

const WishlistSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
    unique: true,
  },
  addedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Wishlist', WishlistSchema);
