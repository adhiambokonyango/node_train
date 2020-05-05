var express = require('express');
var app = express();
var fs = require('fs');
var data = '';

app.use(express.static('public'));

app.get('/get_form.html', function (req, res) {
res.sendFile(__dirname + "/" + "get_form.html");
})

app.get('/process_get', function (req, res) {
    // Prepare output in JSON format
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);


    console.log("program ended");


    res.end(JSON.stringify(response));
    data = response;
})

app.get('/upload', function (req, res) {
    // Prepare output in txt
    fs.appendFile('json.txt', data, function (
        err) {
        if (err) throw err;
        console.log('saved')
    });
})



var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})