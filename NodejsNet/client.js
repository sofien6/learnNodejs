const net = require('net')
const client = net.connect({port:64540},()=>{
  console.log('connected to server!');  
  client.write('world!\r\n');  
})
client.on('data',(data)=>{
    console.log(data.toString());  
    client.end(); 
})
client.on('end', () => {  
    console.log('disconnected from server');  
});  