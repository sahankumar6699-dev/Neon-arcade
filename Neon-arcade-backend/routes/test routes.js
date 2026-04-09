const express = require('express');
const router = express.Router();
const { getTest } = require('../controllers/testController');

// Test route as requested
router.get('/test', getTest);

module.exports = router;
