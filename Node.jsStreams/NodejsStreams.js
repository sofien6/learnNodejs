/*
Streams are the objects that facilitate you to read data from a source and write data to a destination. There are four types of streams in Node.js:
Readable: This stream is used for read operations.
Writable: This stream is used for write operations.
Duplex: This stream can be used for both read and write operations.
Transform: It is type of duplex stream where the output is computed according to input.
*/

// Node.js Reading from stream

var fs = require("fs");  
var data = '';  
var readerStream = fs.createReadStream('./input.txt');  
readerStream.setEncoding('UTF8');  
readerStream.on('data', function(chunk) {  
    data += chunk;  
 });  
 readerStream.on('end',function(){  
    console.log(data);  
 });  
 readerStream.on('error', function(err){  
    console.log(err.stack);  
 });  
 console.log("Program Ended");  

 // Node.js Writing to stream
 var fs = require("fs"); 
 var data = 'A Solution of all Technology';  

 var writerStream = fs.createWriteStream('./output.txt');  
 writerStream.write(data,'UTF8');  
 writerStream.end();  
 // on finish what we should do 
 writerStream.on('finish', function() {  
    console.log("Write completed.");  
});  

// on error 
writerStream.on('error', function(err){  
    console.log(err.stack);  
 })

 console.log("Program Ended");  


// Node.js Piping Streams
/*
Piping is a mechanism where output of one stream is used as input to another stream. There is no limit on piping operation.
Let's take a piping example for reading from one file and writing it to another file.
*/
var fs = require("fs");  
// Create a readable stream  
var readerStream = fs.createReadStream('input.txt');  
// Create a writable stream  
var writerStream = fs.createWriteStream('./pipoutput.txt');  
readerStream.pipe(writerStream);  
console.log("Program Ended");   

// Node.js Chaining Streams
/*
Chaining stream is a mechanism of creating a
 chain of multiple stream operations by connecting 
 output of one stream to another stream. It is 
 generally used with piping operation.
*/

var fs = require("fs");  
var zlib = require('zlib');  
// Compress the file input.txt to input.txt.gz  
fs.createReadStream('input.txt')  
  .pipe(zlib.createGzip())  
  .pipe(fs.createWriteStream('input2.txt.gz'));  
  console.log("File Compressed.");  

// To Decompress the same file
var fs = require("fs");  
var zlib = require('zlib');  
// Decompress the file input.txt.gz to input.txt  
fs.createReadStream('input2.txt.gz')  
  .pipe(zlib.createGunzip())  
  .pipe(fs.createWriteStream('inputDecompresed.txt'));  
  console.log("File Decompressed.");  