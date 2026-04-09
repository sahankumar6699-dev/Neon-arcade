const express = require('express');
const router = express.Router();
const { addGame } = require('../controllers/gameController');

router.post('/add', addGame);

module.exports = router;
