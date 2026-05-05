const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import connectDB first
const connectDB = require('./config/database');

// Routes
app.use('/api/auth', require('./routes/auth'));

// Basic Route
app.get('/', (req, res) => {
  res.json({ 
    message: '🚀 Petrol Pump Management Backend - Ready!',
    endpoints: ['/api/auth/register', '/api/auth/login']
  });
});

const startServer = () => {
  // Graceful MongoDB handling - API works even if DB down
  connectDB().catch(error => {
    console.error('⚠️ MongoDB unavailable - API continues without DB');
  });
  
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log('✅ API Ready - Test: http://localhost:5000/');
  });
};

startServer();


