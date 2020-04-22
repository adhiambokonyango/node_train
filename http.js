var http = require('http');
http.createServer(function(require, res){
    res.writeHead(200, {
        'Content-Type': 'text/plain'});
    res.end('hello world');
}).listen(8080)