
require('dotenv').config();
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const ChatGroq = require('groq-sdk');



app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log('App listening at http://localhost:5000');
});