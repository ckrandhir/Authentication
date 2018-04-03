/*
 * @Author: Chandan Kumar 
 * @Date: 2018-03-28 12:55:52 
 * @Last Modified by: ckumar2@hallmark.com
 * @Last Modified time: 2018-03-28 13:25:21
 */



const jwt = require('jsonwebtoken');

var data = {

    id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);

var decode = jwt.verify(token, '123abc');

console.log(decode);





// const { SHA256 } = require('crypto-js');

// var message = 'I am new user';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);


// console.log(`Hash: ${hash}`);

// var data = {

//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()

// }


// token.data = 5;

// token.hash = SHA256(JSON.stringify(data)).toString()

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {

//     console.log('Data was not change');

// } else {

//     console.log('Data was change');

// }