import fs from 'fs/promises';
import { isFileExist } from '../utils/file-helper.js'
import { OPERATION_FAILED } from '../utils/constants.js'

const read = async () => {
  try {
    const path = './files/fileToRead.txt';

    if(!isFileExist(path)) {
      throw new Error(OPERATION_FAILED);
    }

    const content = await fs.readFile(path, 'utf-8');
    console.log(content);


   } catch (err) {
     console.log(err)
   }
};

await read();
