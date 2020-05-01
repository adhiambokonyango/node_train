var fs = require("fs");
var data = 'simply easy learning';

// creat readable stream
var readerStream = fs.createReadStream('input.txt');

// set encoding to be utf8
readerStream.setEncoding('UTF8');

// handle stream events: data, end, error
readerStream.on('data', function (chunk) {
data += chunk;
});

readerStream.on('end', function () {
console.log(data);
});

readerStream.on('error', function (err) {
console.log(err, stack);
});

console.log("program continous");

//writing to a stream

// create a writable stream
var writerStream = fs.createWriteStream('output.txt');
// write data to stream with encoding
writerStream.write(data, 'UTF8');
// mark end of file
writerStream.end();
// handle stream events: finish and error
writerStream.on('finish', function () {
console.log("write complete");
});
writerStream.on('error', function (err) {
console.log(err.stack);
});

console.log("program ended");