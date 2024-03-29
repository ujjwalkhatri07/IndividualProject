const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required: true

    },
    role: {
    type: String,
    default: 'customer',
    enum: ['customer', 'admin']
    },
}, {timestamps:true});

module.exports = mongoose.model('user',userSchema);