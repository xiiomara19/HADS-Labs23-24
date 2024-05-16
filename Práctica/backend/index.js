
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
    const frequencies = req.body.messages[0].content;
    const dictionary = new Set(req.body.messages[1].content);

    let contentStrings = "For a list of 5 letters long words in Spanish, this are the frequences of appearence for each letter of the alphabet in order"+ 
                            formatFrequences(frequencies) +
                            " Guess a 5 letters long word in spanish based on the frequency of appearence given, so that you find the hidden word." +
                            " Return just the 5 letters word following the format: 'guess: word'.";
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
    const frequencies = req.body.messages[0].content;
    const dictionary = new Set(req.body.messages[1].content);
    const res1 = req.body.messages[2].content;
    const res2 = req.body.messages[3].content;
    const res3 = req.body.messages[4].content;
    const res4 = req.body.messages[5].content;
    const attempt = req.body.messages[6].content;

    let contentStrings = "For a list of 5 letters long words in Spanish, this are the frequences of appearence for each letter of the alphabet in order"+ 
                            formatFrequences(frequencies) +
                            " Your previous guess was: " + attempt + ". The result was: first hidden word -->" + res1 + "; Second hidden word -->" 
                            + res2 + "; Third hidden word -->" + res3 + "; Fourth hidden word -->" + res4 + ". " +
                            " Green means the letter in the guessed word (" + attempt + ") is at the correct position" +
                            " Yellow means the letter in the guessed word (" + attempt + ") is in the hidden word but in the wrong position" +
                            " Grey means the letter in the guessed word (" + attempt + ") is not in the hidden word." +
                            " Guess a 5 letters long word in spanish based on the frequency of appearence given, so that you find the hidden words." +
                            " Return just the 5 letters word following the format: 'guess: word'.";
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
        console.log('WORD TO SEND:', word);
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

