const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

dotenv.config();

connectDB();

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('API is running on port 8080');
});
