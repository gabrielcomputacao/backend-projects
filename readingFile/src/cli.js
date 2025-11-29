import { readFile, writeFile } from "node:fs";
import { catchErrors } from "./errors/getError.js";
import { countWords } from "./index.js";
import { formatTextDuplicated } from "./helpers.js";

let arg = "";
let path = "";
let address = "";

try {
  arg = process.argv;
  path = arg[2];
  address = arg[3];
} catch (error) {
  console.log("err");
}

readFile(path, "utf-8", (error, text) => {
  try {
    const result = countWords(text);
    createAndSaveFile(result, address);
  } catch (err) {
    catchErrors(err);
  }
});

async function createAndSaveFile(wordList, path) {
  const wordListJson = formatTextDuplicated(wordList);

  try {
    const resultWriteFile = await writeFile(path, wordListJson, 'utf-8', (err) => {
        return err
    });
    console.log(resultWriteFile)
    console.log("arquivo criado");
  } catch (err) {
    console.log(err);
  }
}
