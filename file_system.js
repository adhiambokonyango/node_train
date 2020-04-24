
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


fs.open('mynewfile2.txt', 'w', function (err, file) {
if (err) throw err;
console.log('file two saved');
});


fs.appendFile('mynewfile1.txt', 'this is appendFile', function (err) {
if (err) throw err;
console.log('updated');
});

fs.writeFile('mynewfile.txt', 'fs.write replaces specified file and content', function (err) {
if (err) throw err;
console.log('Replaced');
});

//delete file
fs.unlink('mynewfile1.txt', function (err) {
if (err) throw err;
console.log('file deleted');
});

//rename file
fs.rename('mynewfile.txt', 'renamedfile.txt', function (err) {
if (err) throw err;
console.log('file renamed');
});
