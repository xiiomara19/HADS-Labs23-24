import data from './data/data.txt'

function sameLetterAndPosition(word, letter, pos) {
    if (word[pos] === letter) {
        return true;
    }
    else return false;
}

function sameLetterWrongPosition(word, letter, pos){
    let array = [];
    let i=0;

    while (i < 5) {
        if (word[i] === letter && i !== pos) {
            array.push(i);
            console.log(letter);
        }
        i++;
    }
    console.log(array);
    return array;
}

export function Quordle(word, letter, pos, id) {
    let cell = document.getElementById(id);
    let row = cell.parentElement;

    if (sameLetterAndPosition(word, letter, pos)) {
        cell.readOnly = true;
        cell.classList.add("letter-correct");
        console.log("correct");
        //return "green";
    }
    else if (sameLetterWrongPosition(word, letter, pos).length > 0) {
        cell.readOnly = true;
        cell.classList.add("letter-elsewhere");
        console.log("elsewhere");
        //return "yellow";
    }
    else {
        cell.readOnly = true;
        cell.classList.add("letter-absent");
        console.log("absent");
        //return "grey";
    }
    row.classList.remove("Row-current");

}

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
        const words = text.split("\n")
        wordSet = new Set(words)
    })
    return {wordSet}
}

