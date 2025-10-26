import fs from 'node:fs'
import { createFolder } from '../utils/file-helper.js'
import { OPERATION_FAILED } from '../utils/constants.js'

const copy = async () => {
  const folderName = 'files_copy';
  const from = './files'
  const to = `./${folderName}`;

  try {
    const maybeFolder = createFolder(to);
    if(!maybeFolder) {
       throw new Error(OPERATION_FAILED)
    }

    fs.cpSync(from, to, {recursive: true})
  }
  catch (err) {
    console.log(err);
  }
  

};

await copy();
