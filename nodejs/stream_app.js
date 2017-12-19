var fs = require('fs');

var data = '';
var readableStream = fs.createReadStream('mynotes.txt');

readableStream.setEncoding('UTF8');
readableStream.on('data', function(chunk) {
    console.log(chunk);
    data += chunk;
});

readableStream.on('end', function(){
    console.log(data);
});

var writeData = 'Hello World';

var writeableStream = fs.createWriteStream('output.txt');
writeableStream.write(writeData);
writeableStream.end();
writeableStream.on('finish', function(){
    console.log('Write completed');
});