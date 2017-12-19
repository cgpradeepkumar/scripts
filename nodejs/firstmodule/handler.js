var querystring = require('querystring');

function home(response) {
    console.log("Executing 'home' handler");
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
response.writeHead(200, {"Content-Type": "text/html"});
response.write(htmlfile);
response.end();
}

function review(response, reviewData) {
    console.log("Executing 'review' handler");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(querystring.parse(reviewData).text);
    response.end();
}

module.exports.home = home;
module.exports.review = review;