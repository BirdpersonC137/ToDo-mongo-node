const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result)=>{
//     console.log(result)
// })

Todo.findByIdAndRemove('5a63b8dcb3aa5d3cd341adbb').then((todo)=>{
    console.log(todo);
})