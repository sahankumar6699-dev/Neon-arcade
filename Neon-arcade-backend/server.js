const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const testRoutes = require('./routes/testRoutes');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', testRoutes);

// Health check route (optional but useful for deployment)
app.get('/', (req, res) => {
  res.send('Neon Arcade Backend is live! 🎮');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Neon Arcade server running on port ${PORT}`);
});
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);
const gameRoutes = require('./routes/gameRoutes');
app.use('/api/games', gameRoutes);
const cors = require("cors");
app.use(cors());
