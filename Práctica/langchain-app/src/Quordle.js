import data from './data/data.txt'

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