const express = require('express');
const router = express.Router();
const { addGame } = require('../controllers/gameController');
const { protect } = require('../middleware/authMiddleware');

// POST /api/games/add → now requires login (protected)
router.post('/add', protect, addGame);

module.exports = router;
