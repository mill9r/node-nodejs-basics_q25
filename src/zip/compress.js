import fs from 'node:fs';
import streams from 'node:stream/promises';
import zlib from 'node:zlib';

const compress = async () => {
  const fromFile = './files/fileToCompress.txt';
  const toFile = './files/archive.gz'
  const from = fs.createReadStream(fromFile, 'utf-8');
  const to = fs.createWriteStream(toFile);
  const gzip = zlib.createGzip();
  
  await streams.pipeline(from,gzip,to)

};

await compress();
