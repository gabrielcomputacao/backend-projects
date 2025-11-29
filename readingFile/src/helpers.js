function getDuplicateWords(listWords) {
  return listWords.map((paragraph) => {
    return Object.keys(paragraph).filter((key) => paragraph[key] > 1);
  });
}

function formatTextDuplicated(listWords) {
  let finalText = "";
  const listDuplicated = getDuplicateWords(listWords);

  listDuplicated.forEach((paragraph, index) => {
    finalText +=
      Object.keys(paragraph).length > 0
        ? `Palavras duplicadas no paragrafo ${index + 1}:  ${paragraph.join(
            ", "
          )} \n`
        : "";
  });

  return finalText;
}

export { formatTextDuplicated };
