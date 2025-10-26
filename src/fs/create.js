import fs from 'fs/promises';
import { isFileExist } from '../utils/file-helper.js'
import { OPERATION_FAILED } from '../utils/constants.js'

const create = async () => {
  const path = './files/fresh.txt';
  const content = 'I am fresh and young';

  try {

    if(isFileExist(path)) {
      throw new Error(OPERATION_FAILED)
    }

    await fs.writeFile(path, content);

  } catch (err) {
    console.warn(err)
  }
};

await create();
