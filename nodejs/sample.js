// console.log(__filename);
// console.log(__dirname);

// setTimeout(function() {console.log('This is from setTimeOut.')}, 2000);

// setInterval(function() {console.log('This is form setInterval.')}, 2000);
//------------------------------------------------//

// var interval = setInterval(function() {console.log('TCS')}, 2000);

// setTimeout(function(){clearInterval(interval)}, 10000);

//------------------------------------------------//
// function myfunction() {
// 	console.log('my function');
// }

// function caller(anotherFunction) {
// 	console.log('calling anotherFunction');
// 	anotherFunction();
// }
// caller(myfunction);

//------------------------------------------------//

// var printStuff = function(stuff) {
//     console.log(stuff);
// }

// // printStuff('Hello World');

// function mainFunction(anotherFunction, value) {
//     anotherFunction(value);
// }

// mainFunction(printStuff, "World");

//------------------------------------------------//

// (function foo(blah) {
//     setTimeout(blah, 2000);
//     console.log('foo..');
// })(blah);

// function blah() {
//     console.log('blah..');
// }

//  console.log('program finished');

//------------------------------------------------//
// var http = require('http');

// http.createServer(function(request, response){
// 	response.writeHead(200);
//     response.write('Hello World');
//     response.end();
// }).listen(8888);

//------------------------------------------------//

// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// var myfun = function myfun() {
//     console.log('myfun.........');
// }

// eventEmitter.on('myEvent', myfun);
// eventEmitter.emit('myEvent');
//------------------------------------------------//

var os = require('os');
console.log(os.platform());