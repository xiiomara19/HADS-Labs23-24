
require('dotenv').config();
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const ChatGroq = require('groq-sdk');
const fs = require("fs");
const ChatPromptTemplate = require("@langchain/core/prompts");

app.use(cors());
app.use(express.json());

const groq = new ChatGroq({
  apiKey: process.env.REACT_APP_GROQ_API_KEY,
});


async function getGroqChatCompletion() {

  const data = fs.readFileSync("db.json", "utf8");
  const obj = JSON.parse(data);
  const str = JSON.stringify(obj.solutions);

  return groq.chat.completions.create({
      messages: [
          {
              role: "user",
              content: "Take 1 word from this file" + str + "Only write this word no other text",
          }
      ],
      model: "llama3-8b-8192"
  });
  
};

async function getWordFromPos() {

  const data = fs.readFileSync("posiciones.json", "utf8");
  const obj = JSON.parse(data);
  const str = JSON.stringify(obj);

  return groq.chat.completions.create({
      messages: [
          {
              role: "user",
              content: "There are 5 pos here:" + str + "Take randomly one letter from each pos so you have finally a word with 5 letters. Return just generated word",
          }
      ],
      model: "llama3-8b-8192"
  });
  
};

module.exports = {
  getGroqChatCompletion,
  getWordFromPos
};

app.get('/getWord', async (req, res) => {
  const chatCompletion = await getGroqChatCompletion();
  res.send(JSON.stringify(chatCompletion.choices[0]?.message?.content));
});

app.post('/ColorsWord1', (req, res) => {
  const { colors } = req.body;
  console.log('Received colors from word1:', colors);
  res.json({ message: 'Colors received successfully' });
});

app.post('/ColorsWord2', (req, res) => {
  const { colors } = req.body;
  console.log('Received colors from word2:', colors);
  res.json({ message: 'Colors received successfully' });
});

app.post('/ColorsWord3', (req, res) => {
  const { colors } = req.body;
  console.log('Received colors from word3:', colors);
  res.json({ message: 'Colors received successfully' });
});

app.post('/ColorsWord4', (req, res) => {
  const { colors } = req.body;
  console.log('Received colors from word4:', colors);
  res.json({ message: 'Colors received successfully' });
});

app.get('/', (req, res) => {
  res.send('AI Chatbot API is running!');
})

app.listen(port, () => {
  console.log('App listening at http://localhost:5000');
});