var http = require('http');
var fs = require('fs');
var url = require('url');

// create server
http.createServer(function (request, response) {
// parse the request containing file name
    var pathname = url.parse(request.url).pathname;
    // print name of file for which request is made
    console.log("pathname");
    // read content from file system
    fs.readFile(pathname.substr(1), function (err, data) {
if (err){
    console.log(err);
    response.writeHead(404, {'Content-TYpe': 'text/html'});

} else {
    response.writeHead(200, {'Content-TYpe': 'text/html'});
    response.write(data.toString());
}
    });
}).listen(8081);

console.log('server running')