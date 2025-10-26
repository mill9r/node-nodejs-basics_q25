import stream from 'node:stream';
import fs from 'node:fs';

const write = async () => {
   const file = './files/fileToWrite.txt';
   const writable = fs.createWriteStream(file);
   process.stdin.on("data", data => {
      writable.write(data)
   })
};

await write();
