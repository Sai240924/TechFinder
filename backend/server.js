require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Import API routes
const apiRoutes = require('./routes/api');

// Basic route
app.get('/', (req, res) => {
  res.send('Backend API is running');
});

// Use API routes
app.use('/api', apiRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
