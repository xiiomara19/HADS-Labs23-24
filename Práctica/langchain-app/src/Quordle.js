import data from './data/data.txt'

  /////////////////////////////////////////////////////////////////////
  // ----------------------  TABLA HUMANO -----------------------------
  /////////////////////////////////////////////////////////////////////

export const boardBegininig = [
    ["", "", "", "", "",        "", "", "", "", ""],
    ["", "", "", "", "",        "", "", "", "", ""],
    ["", "", "", "", "",        "", "", "", "", ""],
    ["", "", "", "", "",        "", "", "", "", ""],
    ["", "", "", "", "",        "", "", "", "", ""],
    ["", "", "", "", "",        "", "", "", "", ""],
    ["", "", "", "", "",        "", "", "", "", ""],
    ["", "", "", "", "",        "", "", "", "", ""],
    ["", "", "", "", "",        "", "", "", "", ""],


    ["", "", "", "", "",        "", "", "", "", ""],
    ["", "", "", "", "",        "", "", "", "", ""],
    ["", "", "", "", "",        "", "", "", "", ""],
    ["", "", "", "", "",        "", "", "", "", ""],
    ["", "", "", "", "",        "", "", "", "", ""],
    ["", "", "", "", "",        "", "", "", "", ""],
    ["", "", "", "", "",        "", "", "", "", ""],
    ["", "", "", "", "",        "", "", "", "", ""],
    ["", "", "", "", "",        "", "", "", "", ""]
  
]

export const CreateWordSet = async () => {
  let wordSet
  await fetch(data)
  .then(response => response.text())
  .then(text => {
      const words = text.split(/\r\n|\r|\n/)
      wordSet = new Set(words)
  })
  return {wordSet}
}

  /////////////////////////////////////////////////////////////////////
  // ------------------------  TABLA IA -------------------------------
  /////////////////////////////////////////////////////////////////////

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

export const getFrequencies = (wordSet) => {
  const frequencies = Array.from({ length: 5 }, () => Array.from({ length: 27 }, () => 0));

  wordSet.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      const letter = word[i].toLowerCase();
      const position = i;
      let index;
      if (letter === 'ñ') {
        index = 26; // Assign the last index for 'ñ'
      } else {
        index = letter.charCodeAt(0) - 97;
      }
      frequencies[position][index]++;
    }
  });

 // Convert each array in frequencies to a string
 const contentStrings = frequencies.map(array => array.join(','));
 console.log('FRECUENCIAS', contentStrings);

 return contentStrings;
};

export function filterDictionaryAI(wordSet, word, array1, array2, array3, array4,  sol1, sol2, sol3, sol4) {
  const arrays = [array1, array2, array3, array4];
  const filteredWords = Array.from(wordSet).filter((setWord) => {
    return arrays.some((array, index) => {
      for (let i = 0; i < setWord.length; i++) {
        const letter = setWord[i];
        const color = array[i];
        if (color === 'green' && letter !== word[i]) {
          return false;
        }
        if (color === 'yellow' && (!word.includes(letter) || letter === word[i])) {
          return false;
        }
        if (color === 'gray' && word.includes(letter)) {
          return false;
        }
      }
      return true;
    });
  });
  const DictionaryFiltered = filteredWords.push(sol1, sol2, sol3, sol4);
  console.log('PALABRAS FILTRADAS', filteredWords);
  return filteredWords;
}
