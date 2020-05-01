var fs = require("fs");
var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('output2.txt');
// read input and write data on output
readerSTream.pipe(writerStream);
console.log("program ended");