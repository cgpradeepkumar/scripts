var file = require('fs');

file.readFile('mynotes.txt', function(err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log('async method ---> ' + data);
    }
    console.log('async file read completed...')
});


var data = file.readFileSync('mynotes.txt');
console.log('sync method ---> ' + data);
console.log('sync file read completed');
