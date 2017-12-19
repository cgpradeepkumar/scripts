var fs = require('fs');

var readableStream = fs.createReadStream('in.txt');
var writeableStream = fs.createWriteStream('out.txt');

readableStream.pipe(writeableStream);