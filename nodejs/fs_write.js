var fs = require('fs');

var data = 'Hi I am going through NodeJS E0 module';
fs.writeFile('mynotes.txt', data, function(err){
    if (err) {
        console.log('failed -->' + err);
    } else {
        console.log('completed.');
    }
})

