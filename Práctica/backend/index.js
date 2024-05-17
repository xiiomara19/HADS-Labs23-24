
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;
const cors = require('cors');
const ChatGroq = require('groq-sdk');
const fs = require("fs");
const ChatPromptTemplate = require("@langchain/core/prompts");
const e = require('express');

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


app.get('/', (req, res) => {
  res.send('AI Chatbot API is running!');
})

app.post('/sendFrequencesBegining', async (req, res) => {
  try {
    // Extract the frequencies from the request body
    let contentStrings = req.body.messages[0].content;
    const dictionary = new Set(req.body.messages[1].content);

    let word = ''
    while(word.length != 5 || !dictionary.has(word)){
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
          const response = JSON.stringify(prediction.choices[0]?.message?.content).toLowerCase();
          const wordMatch = response.match(/guess: (\w+)/);
          word = wordMatch ? wordMatch[1] : '';
          console.log('Word:', word);

          if(word.length != 5){
            contentStrings = "The word "+ word +" is not 5 letters long. Try again. "+ contentStrings;
          }
          else if(!dictionary.has(word)){
            contentStrings = "The word "+ word +" is not in the dictionary. Try again. "+ contentStrings;
          }
    }
        // Send the prediction back in the response
        res.send(JSON.stringify(word));

  } catch (error) {
        console.error('Error in /sendFrequencesBegining:', error);
        res.status(500).send('Server error');
    }
});

app.post('/receiveAttempt', async (req, res) => {
  try {
    // Extract the frequencies from the request body
    let contentStrings = req.body.messages[0].content;
    const dictionary = new Set(req.body.messages[1].content);
    
    let word = ''
    while(word.length != 5 || !dictionary.has(word)){
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
          const response = JSON.stringify(prediction.choices[0]?.message?.content).toLowerCase();
          const wordMatch = response.match(/guess: (\w+)/);
          word = wordMatch ? wordMatch[1] : '';
          console.log('Created word:', word);

          if(word.length != 5){
            contentStrings = "The word "+ word +" is not 5 letters long. Try again. "+ contentStrings;
            console.log('The word ', word + ' is not 5 letters long. Try again.');
          }
          else if(!dictionary.has(word)){
            contentStrings = "The word "+ word +" is not in the dictionary. Try again. "+ contentStrings;
            console.log('The word ', word + ' is not in the dictionary. Finding the most similar word...');
            word = findMostSimilarWord(word, dictionary);
          }
    }
        // Send the prediction back in the response
        console.log('WORD TO SEND:', word);
        res.send(JSON.stringify(word));

  } catch (error) {
        console.error('Error in /sendFrequencesBegining:', error);
        res.status(500).send('Server error');
    }
});

function levenshteinDistance(a, b) {
  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
      }
    }
  }

  return matrix[b.length][a.length];
}

function findMostSimilarWord(guess, wordSet) {
  let minDistance = Infinity;
  let mostSimilarWord = '';

  for (const word of wordSet) {
    const distance = levenshteinDistance(guess, word);
    if (distance < minDistance) {
      minDistance = distance;
      mostSimilarWord = word;
    }
  }

  return mostSimilarWord;
}

app.listen(port, () => {
  console.log('App listening at http://localhost:5000');
});

