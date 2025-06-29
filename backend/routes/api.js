const express = require('express');
const router = express.Router();

const Wishlist = require('../models/Wishlist');
const Cart = require('../models/Cart');

// Example API route
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from backend API' });
});

// Wishlist routes
router.get('/wishlist', async (req, res) => {
  try {
    const wishlistItems = await Wishlist.find();
    res.json(wishlistItems);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch wishlist items' });
  }
});

router.post('/wishlist', async (req, res) => {
  try {
    const { productId } = req.body;
    if (!productId) {
      return res.status(400).json({ error: 'Product ID is required' });
    }
    const existing = await Wishlist.findOne({ productId });
    if (existing) {
      return res.status(400).json({ error: 'Product already in wishlist' });
    }
    const newItem = new Wishlist({ productId });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add to wishlist' });
  }
});

router.delete('/wishlist/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const deleted = await Wishlist.findOneAndDelete({ productId });
    if (!deleted) {
      return res.status(404).json({ error: 'Product not found in wishlist' });
    }
    res.json({ message: 'Product removed from wishlist' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to remove from wishlist' });
  }
});

// Cart routes
router.get('/cart', async (req, res) => {
  try {
    const cartItems = await Cart.find();
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cart items' });
  }
});

router.post('/cart', async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    if (!productId) {
      return res.status(400).json({ error: 'Product ID is required' });
    }
    let cartItem = await Cart.findOne({ productId });
    if (cartItem) {
      cartItem.quantity = quantity || cartItem.quantity + 1;
      await cartItem.save();
      return res.json(cartItem);
    }
    cartItem = new Cart({ productId, quantity: quantity || 1 });
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add to cart' });
  }
});

router.delete('/cart/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const deleted = await Cart.findOneAndDelete({ productId });
    if (!deleted) {
      return res.status(404).json({ error: 'Product not found in cart' });
    }
    res.json({ message: 'Product removed from cart' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to remove from cart' });
  }
});

module.exports = router;
