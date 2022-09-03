import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const auxDirname = path.dirname(__filename);
const __dirname = path.dirname(auxDirname);

function capitalize(name) {
  const capitalized = name.charAt(0).toUpperCase() + name.slice(1);

  return capitalized;
}

export function CreateSolidComponentFile(myArgs) {
  const routeArray = myArgs[0].split('/');
  const mainDir = `${__dirname}/src`;
  const fileName = routeArray.at(-1);
  const createdPath = `${mainDir}/${myArgs[0]}`;
  fs.mkdir(createdPath, {
    recursive: true
  })
    .then(() => {

      const content = `

import './${fileName}.scss';

export function ${capitalize(fileName)}() {
  return (
    <div>
      <h1>${fileName}</h1>
    </div>
  );
}`;

      fs.writeFile(`${createdPath}/${fileName}.tsx`, content, err => {
        if (err) {
          console.error(err);
        }
      })

      fs.writeFile(`${createdPath}/${fileName}.scss`, '', err => {
        if (err) {
          console.error(err);
        }
      })

    })
    .catch(err => console.error(err))
}

const myArgs = process.argv.slice(2);

CreateSolidComponentFile(myArgs);
