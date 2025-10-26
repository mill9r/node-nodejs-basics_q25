import fs from 'fs/promises';
import { isFileExist } from '../utils/file-helper.js'
import { OPERATION_FAILED } from '../utils/constants.js'

const list = async () => {
   try {
    const path = './files';

    if(!isFileExist(path)) {
      throw new Error(OPERATION_FAILED);
    }

    const files = await fs.readdir(path);

    for(let file in files) {
      console.log(file);
    }

   } catch (err) {
     console.log(err)
   }

   
};

await list();
