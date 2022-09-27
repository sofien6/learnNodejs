// Node.js File System
var fs = require("fs")  
var data = fs.readFileSync('input.txt');  
console.log("Synchronous read: " + data.toString());  
console.log("Program Ended");  

// Node.js Open a file
var fs = require("fs");  
console.log("Going to open file!");  
fs.open('input.txt', 'r+', function(err, fd) {  
    if (err) {  
        return console.error(err);  
    }  
   console.log("File opened successfully!");       
 });  

 