var events = require('events');
var eventEmitter = new events.EventEmitter();

var myfun = function myfun() {
    console.log('myfun.........');
}

eventEmitter.on('myEvent', myfun);
eventEmitter.emit('myEvent');