import streams from 'node:stream/promises';
import fs from 'node:fs';

const read = async () => {
 const file = './files/fileToRead.txt';
 const fileStream = fs.createReadStream(file, 'utf-8');

 for await (const chunk of fileStream) {
    process.stdout.write(chunk)
 }

};

await read();
