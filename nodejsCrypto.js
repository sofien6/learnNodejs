/*
The Node.js Crypto module supports cryptography. It provides cryptographic functionality that includes a set of wrappers for open SSL's hash HMAC, cipher, decipher, sign and verify functions.
*/

// Encryption Example using Hash and HMAC
const crypto = require('crypto')
const secret = 'abcdefg'
const hash = crypto.createHmac('sha256',secret).update('welcome to java point').digest('hex')

console.log('using hmac ',hash);

