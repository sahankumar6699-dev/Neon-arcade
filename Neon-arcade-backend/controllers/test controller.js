// Simple test controller (no logic yet - ready for expansion)
const getTest = (req, res) => {
  res.status(200).send('Neon Arcade API running');
};

module.exports = { getTest };
