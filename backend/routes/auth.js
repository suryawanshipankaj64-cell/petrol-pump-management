const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { auth } = require('../middleware/auth');

const router = express.Router();

// POST /api/auth/register
router.post('/register', registerUser);

// POST /api/auth/login
router.post('/login', loginUser);

// GET /api/auth/me - Protected
router.get('/me', auth, (req, res) => {
  res.json(req.user);
});

module.exports = router;

