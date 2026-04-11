const Game = require('../models/Game');

// @desc    Add a new game
// @route   POST /api/games/add
// @access  Private (requires login)
const addGame = async (req, res) => {
  try {
    const { title, gameUrl, thumbnail } = req.body;

    // Basic validation
    if (!title) {
      return res.status(400).json({
        success: false,
        message: 'Title is required'
      });
    }

    if (!gameUrl) {
      return res.status(400).json({
        success: false,
        message: 'gameUrl is required'
      });
    }

    const newGame = new Game({
      title,
      gameUrl,
      thumbnail,
      uploadedBy: req.user.id
    });

    const savedGame = await newGame.save();

    res.status(201).json({
      success: true,
      message: 'Game uploaded successfully',
      game: savedGame
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error uploading game',
      error: error.message
    });
  }
};

module.exports = { addGame };
