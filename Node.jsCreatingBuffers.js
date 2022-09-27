// Node.js Creating Buffers
// Create an uninitiated buffer
var buf = new Buffer(10);  

// Create a buffer from array
var buf = new Buffer([10, 20, 30, 40, 50]);   

// Create a buffer from string
var buf = new Buffer("Simply Easy Learning", "utf-8");

// Node.js Writing to buffers Let's take an example:

buf = new Buffer(256);  
len = buf.write("Simply Easy Learning");  

console.log("Octets written : "+  len);  

// Node.js Reading from buffers
buf = new Buffer(26);  
for (var i = 0 ; i < 26 ; i++) {  
  buf[i] = i + 97;  
}  

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz  
console.log( buf.toString('ascii',0,5));   // outputs: abcde  
console.log( buf.toString('utf8',0,5));    // outputs: abcde  
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde 