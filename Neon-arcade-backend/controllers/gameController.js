const Game = require('../models/Game');

const addGame = async (req, res) => {
  try {
    const { title, gameUrl, thumbnail, uploadedBy } = req.body;

    const game = new Game({
      title,
      gameUrl,
      thumbnail,
      uploadedBy
    });

    await game.save();

    res.status(201).json({
      message: 'Game added successfully',
      game
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addGame };
