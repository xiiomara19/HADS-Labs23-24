import {ChatGroq} from '@langchain/groq';
import { ChatPromptTemplate } from "@langchain/core/prompts";

export const boardBeginingAI = [ 
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],

    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
];

const model = new ChatGroq({
    apiKey: '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',
  });
  
const prompt = ChatPromptTemplate.fromMessages([
    ["user", "You are playing the game Quordle. "+ 
    "You have to guess the 4 words that are hidden in the board. "+ 
    "You can guess a word by typing the word in the chat. The game "+
    "will tell you how many letters are correct and how many letters "+
    "are in the correct position. You have 9 attempts to guess the "+
    "4 words. For each attempt you have to provide only one word, and"+
    "that word wil be used as guess for the 4 hidden words. "+
    "After each attempt you will be provided the results of that attempt: "+
    "for each word you will receive feedbaack on: "+
    " 1. how many letters are in the word but in the wrong postion, keyword used will be yellow "+
    " 1. how many letters are in the word in the correct postion, keyword used will be green "+
    " 1. how many letters are not in the word, keyword used will be grey "+
    "The words are in Spanish and 5 letters long. The words are not repeated. "+
    " The word you provide mmust have exactly 5 letters long andd exist in the Spanish language. "],
]);

export const fetchData = async () => {
    const chain = prompt.pipe(model);
    const response = await chain.invoke({
        input: "Make your first guess.",
    });
    console.log("response", response);
};
