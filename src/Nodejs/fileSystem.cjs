let fs = require('fs');

let filePath = __dirname + '/file.txt';

//  Read Stream
let readData = fs.createReadStream(filePath, {
    encoding: 'utf8', highWaterMark: 1 * 1024
})

// let writeData = fs.createWriteStream(filePath);
readData.on('data', function (chunk) {
    console.log(chunk.length);
}) 