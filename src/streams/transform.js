import { Transform } from 'node:stream';

class ReverseText extends Transform {
  constructor(options) {
    super(options)
  }

  _transform(chunk, encoding, cb) {
    const str =  chunk.toString().split('').reduceRight((acc, char) => {
      return acc + char
    }, '')

    this.push(str);

    cb();
  }
}


const transform = async () => {
  process.stdin.pipe(new ReverseText()).pipe(process.stdout)
};

await transform();
