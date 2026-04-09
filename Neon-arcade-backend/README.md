# Neon Arcade Backend

Starter backend for the Neon Arcade gaming website.

## Tech Stack
- Node.js + Express
- MongoDB + Mongoose
- MVC architecture

## Features Included
- Express server with proper middleware
- MongoDB connection (using environment variables)
- Clean MVC folder structure
- Test route: `GET /api/test`

## Quick Start (Local)
1. `git clone <repo>`
2. `cp .env.example .env`
3. Add your MongoDB Atlas connection string to `.env`
4. `npm install`
5. `npm run dev`

## Deployment (No local setup required)
1. Push this repo to GitHub
2. In your hosting platform (Render, Railway, etc.):
   - Set environment variables: `MONGO_URI` and `PORT`
   - Use start command: `npm start`
3. Deploy!

The app will automatically connect to your MongoDB (Atlas recommended) and run the test endpoint at `/api/test`.
