import fs from 'node:fs';
import crypto from 'node:crypto';

const calculateHash = async () => {
  const input = './files/fileToCalculateHashFor.txt';
  const hash = crypto.createHash('sha256');
  const in$ = fs.createReadStream(input, 'utf-8');
  in$.pipe(hash).setEncoding('hex').pipe(process.stdout);
};

await calculateHash();
