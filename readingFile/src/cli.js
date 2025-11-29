import { readFile, writeFile } from "node:fs";
import { catchErrors } from "./errors/getError.js";
import { countWords } from "./index.js";
import { formatTextDuplicated } from "./helpers.js";
import { Command } from "commander";
import { resolve } from "path";
import chalk from 'chalk'

const program = new Command();

program
  .version("0.0.1")
  .option("-t, --text <string>", "text to process")
  .option("-d, --destine <string>", "path to save file processed")
  .action((options) => {
    const { text, destine } = options;

    if (!text || !destine) {
      console.error(chalk.red( "write to path and text to process"));
      program.help();
      return;
    }

    try {
      const pathTextToProcess = resolve(text);
      const pathToSave = resolve(destine);

      console.log(pathTextToProcess)
      console.log(pathToSave)

      processFile(pathTextToProcess, pathToSave);
    } catch (error) {
      
      console.log( chalk.red(error) );
    }
  });

async function createAndSaveFile(wordList, path) {
  const wordListJson = formatTextDuplicated(wordList);

  try {
    const resultWriteFile = await writeFile(
      path,
      wordListJson,
      "utf-8",
      (err) => {
        return err;
      }
    );
   
   console.log( chalk.green( "arquivo criado"));
  } catch (err) {
    console.log(err);
  }
}

function processFile(textToProcess, address) {
  // Essa calback funciona como o then, mas nao é muito utilizada mais
  readFile(textToProcess, "utf-8", (error, text) => {
    try {
      const result = countWords(text);
      createAndSaveFile(result, address);
    } catch (err) {
      catchErrors(err);
    }
  });
}

program.parse();
