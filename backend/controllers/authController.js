const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// @desc    Register user
const registerUser = async (req, res) => {
  const { name, email, password, role, phone } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    user = new User({ name, email, password, role, phone });
    await user.save();

    const token = generateToken(user._id);
    res.status(201).json({
      token,
      user: { id: user._id, name, email, role }
    });
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// @desc    Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !await user.comparePassword(password)) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const token = generateToken(user._id);
    res.json({
      token,
      user: { id: user._id, name: user.name, email, role: user.role }
    });
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { registerUser, loginUser };

