function route(handle, pathname, response, reviewData) {
    console.log('routing request for ' + pathname);
    if(typeof handle[pathname] === 'function') {
        handle[pathname](response, reviewData);
    } else {
        console.log('No handler for pathname ' + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write('Error 404 page not found');
        response.end();
    }
}

module.exports.route =  route;