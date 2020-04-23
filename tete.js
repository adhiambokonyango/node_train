var http = require('http');
http.createServer(function(require, res){
    //status code meaning everything is ok
    res.writeHead(200, {
        'Content-Type': 'text/plain'});
    res.end('hello world');
}).listen(8080)