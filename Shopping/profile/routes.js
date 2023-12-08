// profileRoutes.js
const express = require('express');
const router = express.Router();
const User = require('./User'); // Your User model
const isAuthenticated = require('./middleware/isAuthenticated'); // An example authentication middleware

// Middleware to check if the user is authenticated
router.use('/api/profile', isAuthenticated);

// Get the profile of the logged-in user
router.get('/api/profile', async (req, res) => {
  try {
    const userId = req.session.userId; // Or however you're storing the logged-in user's ID
    const user = await User.findById(userId).select('-password'); // Exclude sensitive fields like password

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.json(user);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Get the profile of any user by their profile ID
router.get('/api/profile/:profileId', async (req, res) => {
  try {
    const { profileId } = req.params;
    const user = await User.findById(profileId).select('-password'); // Exclude sensitive fields

    if (!user) {
      return res.status(404).send('User not found');
    }

    // Only send public information
    const publicProfileData = {
      username: user.username,
      bio: user.bio,
      // Add other fields that you want to be public
    };

    res.json(publicProfileData);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
