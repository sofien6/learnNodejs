//Node.js console-based Example
console.log("hello dz brain");

//Node.js web-based Example

var http = require("http");  // load http module and store returned HTTP instance into http variable

// Create server
http.createServer((req,res)=>{
    res.end('hello we are dzbrarin')
}).listen(3000)

console.log('Server running at http://127.0.0.1:3000/');  
