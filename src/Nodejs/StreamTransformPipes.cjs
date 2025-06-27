const fs = require('fs');
const path = require('path');
const { Transform } = require('stream');

class UpperCase extends Transform {

    constructor() {
        super();
    }

    _transform(chunks, encoding, callback) {
        let upper = chunks.toString().toUpperCase();
        this.push(upper);
        callback();
    }
}
const filePath = path.join(__dirname + '/file.txt');
const readStream = fs.createReadStream(filePath, { encoding: 'utf8', highWaterMark: 2 * 1024 });

const us = new UpperCase();
readStream.pipe(us).on('data', (chunks) => {
    console.log(chunks.toString('utf8'));
}).on('close', () => {
    console.log('Closed Successfully');
}).on('error', err => {
    console.error(err.message);
})