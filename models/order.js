const mongoose = require('mongoose');
const orderSchema =  new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    food:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true
    },
    quanity:{
        type:String,
        required:true
    },
    notes:{
        type:String,
    },
    dateTime:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model('Order',orderSchema);