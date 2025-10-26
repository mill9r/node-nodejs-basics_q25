import fs from 'fs/promises';
import { isFileExist } from '../utils/file-helper.js'
import { OPERATION_FAILED } from '../utils/constants.js'

const remove = async () => {
   const path = './files/fileToRemove.txt';

    if(!isFileExist(path)) {
      throw new Error(OPERATION_FAILED);
    }

    await fs.unlink(path);
};

await remove();
