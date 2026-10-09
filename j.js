require('dotnev').config()
const express = require('express');
const app = express();
const PORT = process.env.port || 3000;

// --- Middleware ---
app.use(express.json());

// Bonus: Custom request logger middleware
app.use((req, res, next) => {
 const timestamp = new Date ().toISOString();
 console.log(`[${timestamp}] ${req.method} ${req.url}`);
 next();
});

// --- Routes ---

// GET / - Home route
app.get('/', (req, res) => {
 res.send('my week 2 API');
});

// POST /user - Accept name and email, respond with greeting
app.post('/user', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'name and email are required' })
    }
v})