const express = require('express');
const router = express.Router();
const { addGame, getAllGames } = require('../controllers/gameController');

router.post('/add', addGame);
router.get('/', getAllGames);

module.exports = router;
