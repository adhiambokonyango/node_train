var http = require('http');

// options to be used by request
var options = {
    host: 'localhost',
    port: '8081',
    path: '/index.htm'
};

// call back functions is used to deal with response
var callback = function (response) {
var body = '';
    response.on('data', function (data) {
body += data;
    });
response.on('end', function () {
// data recieved completely
    console.log(body);
});
}
// make a request to the server
var req = http.request(options, callback);
req.end();
