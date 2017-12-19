var querystring = require('querystring');

function home(response) {
    console.log('executing home handler');
    var htmlfile = '<!DOCTYPE html>'+
'<html>'+
'<head>'+
'	<title>Home Page</title>'+
'</head>'+
'<body>'+
'<form action="/review" method="post">'+
'	<textarea name="text" rows="20" cols="60"></textarea>'+
'	<input type="submit" value="Submit text">'+
'</form>'+
'</body>'+
'</html>';
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write(htmlfile);
    response.end();
}

function review(response, reviewData) {
    console.log('executing review handler');
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write('review: ' + querystring.parse(reviewData).text);
    response.end();
}

exports.home = home;
exports.review = review;