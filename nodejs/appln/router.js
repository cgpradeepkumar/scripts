var handler = require('./handler');

var handle = {};
handle['/'] = handler.home;
handle['/home'] = handler.home;
handle['/review'] = handler.review;

function route(response, pathname, reviewData) {
    console.log('request received for pathname --> ' + pathname);

    if (typeof handle[pathname] === 'function') {
        handle[pathname](response,reviewData);
    } else {
        console.log('no handler for pathname \'' + pathname + '\' found');
        response.writeHead(404, {'Content-Type':'text/plain'});
        response.write('Error 404 page not found!');
        response.end();
    }
}

exports.route = route;