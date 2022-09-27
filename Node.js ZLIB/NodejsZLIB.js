// Node.js ZLIB Example: Compress File
const zlib = require('zlib');  
const gzip = zlib.createGzip();  
const fs = require('fs');  
const inp = fs.createReadStream('input.txt');  
const out = fs.createWriteStream('input.txt.gz');  
inp.pipe(gzip).pipe(out);  

// Node.js ZLIB Example: Decompress File
const zlib = require('zlib');    
const unzip = zlib.createUnzip();  
const fs = require('fs');  
const inp1 = fs.createReadStream('input.txt.gz');  
const out2 = fs.createWriteStream('input2.txt');  
inp.pipe(unzip).pipe(out);  


