

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

export function countWords(text) {
  // * Nesse caso FlatMap é mais performático, pois nao precisa fazer um filter e um map

  const paragraphs = extractParagraph(text);

  const counts = paragraphs.flatMap((paragraph) => {
    if (!paragraph) return [];
    return verifyDuplicateWord(paragraph);
  });

  return counts;
}

