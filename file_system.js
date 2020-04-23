
// Read files
// Create files
// Update files
// Delete files
// Rename files

// fs.readFile
var http= require('http');
var fs = require('fs');
http.createServer(function (req, res) {
fs.readFile('demo_file.html', function (errr, data) {
res.writeHeader(200, {'Content-Type': 'text/html'});
res.write(data);
return res.end();
});
}).listen(8080);

// methods for creating new file

// fs.appendFile()
// fs.open()
// fs.writeFile()

var fs = require('fs');
fs.appendFile('mynewfile.txt', 'hello content', function (
err) {
if (err) throw err;
console.log('saved')
});

// The fs.writeFile() method
// replaces the specified file
// and content if it exists.
// If the file does not exist,
// a new file, containing the
// specified content, will be
// created:

//updating a file
