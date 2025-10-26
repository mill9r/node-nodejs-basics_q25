import fs from 'node:fs';
import streams from 'node:stream/promises';
import zlib from 'node:zlib';

const decompress = async () => {
  const toFile = './files/fileToCompress.txt';
  const fromFile = './files/archive.gz'
  const from = fs.createReadStream(fromFile);
  const to = fs.createWriteStream(toFile, 'utf-8');
  const gzip = zlib.createGunzip();
  
  await streams.pipeline(from,gzip,to)
};

await decompress();
