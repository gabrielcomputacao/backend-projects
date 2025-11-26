import { readFile } from "node:fs";
import { catchErrors } from "./errors/getError.js";
const arg = process.argv;

const path = arg[2];

function cleanWords(text) {
  return text.replace(/[.,/\#!$%\^&\*;:{=\-_'~()]/g, "");
}

function verifyDuplicateWord(text) {
  const listWords = text.split(" ");
  const result = {};

  listWords.forEach((word) => {
    if (word.length >= 3) {
      const cleanWord = cleanWords(word);
      result[cleanWord] = (result[cleanWord] || 0) + 1;
    }
  });

  return result;
}

function extractParagraph(text) {
  const paragraphs = text.toLowerCase().split("\n");

  return paragraphs;
}

function countWords(text) {
  // * Nesse caso FlatMap é mais performático, pois nao precisa fazer um filter e um map

  const paragraphs = extractParagraph(text);

  const counts = paragraphs.flatMap((paragraph) => {
    if (!paragraph) return [];
    return verifyDuplicateWord(paragraph);
  });

  console.log(counts);
}

readFile(path, "utf-8", (error, text) => {
    try {
        countWords(text);
    } catch (err) {
       catchErrors(err)
    }
});
