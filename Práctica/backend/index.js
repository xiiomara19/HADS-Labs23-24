
require('dotenv').config();
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const ChatGroq = require('groq-sdk');
const fs = require("fs");
const ChatPromptTemplate = require("@langchain/core/prompts");

app.use(cors());

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

module.exports = {
  getGroqChatCompletion
};

app.get('/getWord', async (req, res) => {
  const chatCompletion = await getGroqChatCompletion();
  res.send(JSON.stringify(chatCompletion.choices[0]?.message?.content));
});

app.listen(port, () => {
  console.log('App listening at http://localhost:5000');
});