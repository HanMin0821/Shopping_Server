// const express = require('express');
// const router = express.Router();
// const User = require('../users/model');
// const mongoose = require('mongoose');
//
// // Get the profile of the logged-in user
// router.get('/api/profile/me', async (req, res) => {
//   try {
//     const userId = req.session.userId; // Ensure this is correctly set
//
//     // Validate the userId
//     if (!mongoose.Types.ObjectId.isValid(userId)) {
//       return res.status(400).send('Invalid user ID');
//     }
//
//     const user = await User.findById(userId).select('-password'); // Exclude password field
//
//     if (!user) {
//       return res.status(404).send('User not found');
//     }
//
//     res.json(user);
//   } catch (error) {
//     console.error(error); // Log the error for debugging
//     res.status(500).send('Server error');
//   }
// });
//
// // Get the profile of any user by their profile ID
// router.get('/api/profile/:profileId', async (req, res) => {
//   try {
//     const { profileId } = req.params;
//
//     // Validate the profileId
//     if (!mongoose.Types.ObjectId.isValid(profileId)) {
//       return res.status(400).send('Invalid profile ID');
//     }
//
//     const user = await User.findById(profileId).select('-password'); // Exclude password field
//
//     if (!user) {
//       return res.status(404).send('User not found');
//     }
//
//     // Only send public information
//     const publicProfileData = {
//       username: user.username,
//       bio: user.bio,
//       // Add other fields that you want to be public
//     };
//
//     res.json(publicProfileData);
//   } catch (error) {
//     console.error(error); // Log the error for debugging
//     res.status(500).send('Server error');
//   }
// });
//
// module.exports = router;
