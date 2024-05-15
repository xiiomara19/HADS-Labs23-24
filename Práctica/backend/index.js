
require('dotenv').config();
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const ChatGroq = require('groq-sdk');
const path = require("path");
const fs = require("fs");
const ChatPromptTemplate = require("@langchain/core/prompts");

app.use(cors());

const groq = new ChatGroq({
  apiKey: process.env.REACT_APP_GROQ_API_KEY,
});


async function getDiccionary(res) {
  const data = fs.readFileSync("db.json", "utf8");
  const obj = JSON.parse(data);
  const str = JSON.stringify(obj.solutions);
  res.send(str);
}

async function main() {
  const chatCompletion = await getGroqChatCompletion();
  // Print the completion returned by the LLM.
  //const wordMatch = chatCompletion.content.match(/guess: (\w+)/);
  //  console.log(wordMatch);
  //  const word = wordMatch ? wordMatch[1] : '';
  console.log(chatCompletion.choices[0]?.message?.content || "");
  return chatCompletion.choices[0]?.message?.content;
 // console.log("Guessed word", word);
}
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
  main,
  getGroqChatCompletion
};

app.get('/', async (req, res) => {
  //res.send('Welcome to Quordle!');
  const chatCompletion = await getGroqChatCompletion();
  console.log(chatCompletion.choices[0]?.message?.content || "");
  res.send(chatCompletion.choices[0]?.message?.content || "");

  //getDiccionary(res);
  //getAnswerFromGroq(res);
  //getGroqChatCompletion(res);
  
});

app.listen(port, () => {
  console.log('App listening at http://localhost:5000');
  main();
});