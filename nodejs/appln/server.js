var http = require('http');
var router = require('./router');
var url = require('url');

function startServer() {

    var reviewData = '';
    function onRequest(request, response) {
        console.log('Incoming request...');
        var pathname = url.parse(request.url).pathname;
        request.setEncoding('utf8');

        request.addListener('data', function(chunk) {
            reviewData += chunk;
        });

        request.addListener('end', function() {
            router.route(response, pathname, reviewData);
        });
    }

    http.createServer(onRequest).listen(8888);

    console.log('server listening on http://localhost:8888');
}

exports.startServer = startServer;

