var express = require('express');
var app = express();

app.get('/', function (request, response) {
console.log("got a request from home page");
response.send('hello get');
})

app.post('/posting', function (request, response) {
res.send('hello post');
})

app.delete('/del user', function (request, response) {
response.send('hello delete');
})

app.get('/list_user', function (request, response) {
response.send('page listing');
})

var server = app.listen(8080, function () {
var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})