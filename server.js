const express = require('express');
require('dotenv').config()
const connectDB = require('./config/database');

connectDB()

const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('API is running on port 8080');
});
