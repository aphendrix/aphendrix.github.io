console.log("🔥 server.js is executing...");
const express = require('express');
const { Pool } = require('pg');
const path = require('path');

const app = express();
const port = 3000;

// PostgreSQL connection setup
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'gradebook',
  password: 'Aph4JC99', // <-- replace with your actual password
  port: 5432,
});

// Serve static files from the public folder
app.use(express.static('public'));

// Endpoint to get grades from the database
app.get('/grades', async (req, res) => {
  try {
    const result = await pool.query('SELECT name, grade FROM students');
    res.json(result.rows);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).send('Error retrieving data from database');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
