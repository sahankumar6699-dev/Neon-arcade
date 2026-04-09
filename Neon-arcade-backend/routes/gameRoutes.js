const express = require('express');
const router = express.Router();

const { addGame, getGames } = require('../controllers/gameController');

// ✅ Import auth middleware
const { protect } = require('../middleware/authMiddleware');

// Public route (no login needed)
router.get('/', getGames);

// 🔒 Protected route (login required)
router.post('/add', protect, addGame);

module.exports = router;
