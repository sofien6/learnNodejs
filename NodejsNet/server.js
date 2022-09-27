const net = require('net'); 
const server = net.createServer((soket)=>{
    soket.end('hey dzbrain')
}).on('error',(err)=>{
    throw err;
})

// grab a random port.  
server.listen(()=>{
    address = server.address(); 
    console.log('opened server on %j',address);
})

