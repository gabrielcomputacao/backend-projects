
import { readFile } from 'node:fs'
const arg = process.argv

const path = arg[2]


function getWordsInParagraph(text){
    const paragraphs = text.toLowerCase().split('\n')

    // * Nesse caso FlatMap é mais performático, pois nao precisa fazer um filter e um map

    const counts = paragraphs.flatMap( paragraph => {
        if(!paragraph) return [];
        return verifyDuplicateWord(paragraph)
    } )

   //const counts = paragraphs.map( paragraph => verifyDuplicateWord(paragraph) )
   console.log(counts)
}

function cleanWords(text){
    return text.replace(/[.,/\#!$%\^&\*;:{=\-_'~()]/g , '');
}

function verifyDuplicateWord(text){

    const listWords = text.split(' ');
    const result = {};

    listWords.forEach(word => {

        if(word.length >= 3){
            const cleanWord = cleanWords(word)
            result[cleanWord] = (result[cleanWord] || 0) + 1

        }

    });

    return result;

}

readFile(path, 'utf-8', (error, text) =>{
   //verifyDuplicateWord(text)
   getWordsInParagraph(text)
})




