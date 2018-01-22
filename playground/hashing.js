const {SHA256} = require('crypto-js');
// //check bcrypt.
// let message = 'I am user number 3'

// const hash = SHA256(message).toString()

// console.log(`${message}`)
// console.log(`${hash}`)

// let data = {
//     id: 4
// }
// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// let resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString();

// if(resultHash === token.hash){
//     console.log('data was not changed')
// }else{
//     console.log('data was changed, do no trust')
// }

const jwt = require('jsonwebtoken')

let data = {
    id: 10
};
let token = jwt.sign(data, 'abc123')
// jwt.verify
console.log(token)

let decoded =jwt.verify(token, 'abc123')

console.log('decoded', decoded);