const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')
// let id = '5a627ac4f5538fa1f88ac8fd'

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid')
// }
// Todo.find({
//     _id: id
// }).then((todos)=>{
//     if (todos.length == 0){
//         return console.log('Id not found')
//     }
//     console.log('Todos', todos)
// })

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     if (!todo){
//         return console.log('Id not found')
//     }
//      console.log('Todo', todo)
// })

// Todo.findById(id).then((todo)=>{
//     if (!todo){
//         return console.log('Id not found')
//     }
//     console.log('Todo by id:', todo)
// }).catch((e)=>{
//     console.log(e)
// })

userId = '5a62481a4699ea98f0e0176e'

User.findById(userId).then((user)=>{
    if(!user){
        return console.log('User with that id is not in the database')
    }
    console.log(JSON.stringify(user, undefined, 2))
}).catch((e)=>{
    console.log(e)
})