import { isFileExist } from '../utils/file-helper.js'
import { OPERATION_FAILED } from '../utils/constants.js'
import fs from 'node:fs';

const rename = async () => {
  const from = './files/wrongFilename.txt';
  const to = './files/properFilename.md';

  if(!isFileExist(from) || isFileExist(to)) {
    throw new Error(OPERATION_FAILED)
  }

  fs.renameSync(from,to)
};

await rename();
