const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var message = 'I am user 5';
var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);


var user = { email: 'aaacdfc@dvfc.ru',
    password: 'c1fffffff1',
    _id: '593ef41a4e78172946f5915e',
    tokens: [] }
let access = 'auth';
let token = jwt.sign({_id: user._id.toHexString().access}, 'abc123').toString();

let decoded = jwt.verify(token, 'abc123');

console.log(user._id.toHexString)
console.log(token)
console.log(decoded)
