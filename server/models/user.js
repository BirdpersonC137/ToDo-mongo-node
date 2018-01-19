const mongoose = require('mongoose')

let User = mongoose.model('User',{
    email:{
        type: String,
        minlength: 5,
        required: true,
        trim: true,
        unique: true
    }
});

module.exports = {User}