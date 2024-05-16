
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;
const cors = require('cors');
const ChatGroq = require('groq-sdk');
const fs = require("fs");
const ChatPromptTemplate = require("@langchain/core/prompts");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const groq = new ChatGroq({
  apiKey: process.env.REACT_APP_GROQ_API_KEY,
});


async function getGroqChatCompletion(message) {

  message = JSON.stringify(message);

  return groq.chat.completions.create({
      messages: [
          {
              role: "user",
              content: message,
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

app.get('/getDbData', (req, res) => {
  const data = fs.readFileSync("../langchain-app/src/data/db.json", "utf8");
  console.log(data);
  res.send(data);
});


app.post('/sendFrequencesBegining', async (req, res) => {
  try {
    // Extract the frequencies from the request body
    const frequencies = req.body.messages[0].content;

    const contentStrings = "For a list of 5 letters long words in Spanish, this are the frequences of appearence for each letter of the alphabet in order"+ 
    formatFrequences(frequencies) +
    " Guess a 5 letters long word in spanish based on the frequency of appearence given, so that you find the hidden word." +
    " Return just the 5 letters word following the format: 'guess: word'."

    // Format the frequencies to match the expected format
    const formattedFrequencies = {
      messages: [
        {
          content: contentStrings
        }
      ]
    };

    // Pass the frequencies to getGroqChatCompletion
    const prediction = await getGroqChatCompletion(formattedFrequencies);

    // Extract the prediction from the response
    const response = JSON.stringify(prediction.choices[0]?.message?.content);
    console.log('Response:', response);
    const wordMatch = response.match(/guess: (\w+)/);
    const word = wordMatch ? wordMatch[1] : '';
    console.log('Word:', word);

        // Send the prediction back in the response
        res.send(JSON.stringify(word));

      } catch (error) {
        console.error('Error in /sendFrequencesBegining:', error);
        res.status(500).send('Server error');
    }
});

function formatFrequences(frequencies) {
      // Parse the frequencies string into an array of arrays
      const frequencyStrings = frequencies.split('; ');
      const content = frequencyStrings.map(frequencyString => {
        const numbers = frequencyString.replace(/.*: /, '').split(',');
        return numbers.map(Number);
      });
  
      // Convert each array in content to a string
      const contentStrings = content.map(array => array.join(','));
      return contentStrings;
}

app.listen(port, () => {
  console.log('App listening at http://localhost:5000');
});

