/*
Node.js DNS
The Node.js DNS module contains methods to get information of given hostname. Let's see the list of commonly used DNS functions:
dns.getServers()
dns.setServers(servers)
dns.lookup(hostname[, options], callback)
dns.lookupService(address, port, callback)
dns.resolve(hostname[, rrtype], callback)
dns.resolve4(hostname, callback)
dns.resolve6(hostname, callback)
dns.resolveCname(hostname, callback)
dns.resolveMx(hostname, callback)
dns.resolveNs(hostname, callback)
dns.resolveSoa(hostname, callback)
dns.resolveSrv(hostname, callback)
dns.resolvePtr(hostname, callback)
dns.resolveTxt(hostname, callback)
dns.reverse(ip, callback)
*/

// Node.js DNS Example 1 dns.lookup() function.
const dns = require('dns')
dns.lookup('www.dzbrain.com',(err,address,family)=>{
    console.log('address:',address);
    console.log('family:',family);
})

// Node.js DNS Example 2 resolve4() and reverse() functions.
const dns2 = require('dns');  
dns2.resolve4('www.dzbrain.com', (err, addresses) => {  
  if (err) throw err;  
  console.log(`addresses: ${JSON.stringify(addresses)}`);  
  addresses.forEach((a) => {  
    dns2.reverse(a, (err, hostnames) => {  
      if (err) {  
        throw err;  
      }  
      console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);  
    });  
  });  
});   

// Node.js DNS Example 3 to print the localhost name using lookupService()
const dns = require('dns');  
dns.lookupService('127.0.0.1', 23, (err, hostname, service) => {  
  console.log(hostname, service);  
    // Prints: localhost  
});  