const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//save new something

let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// let newTodo = new Todo({
//     text: 'Refactor my code'
// });
// let otherTodo = new Todo({
//     text: 'this class is good!'
// });

// otherTodo.save().then((doc)=>{
//     console.log('Saved todo', doc)
// }, (e)=>{
//     console.log('Unable to save todo', e)
// })

//User
let User = mongoose.model('User',{
    email:{
        type: String,
        minlength: 5,
        required: true,
        trim: true,
        unique: true
    }
});

let newUser = new User({
    email: 'test@test.com'
});

newUser.save().then((doc)=>{
    console.log('User saved', doc);
}, (e)=>{
    console.log('Unable to save user', e);
})

