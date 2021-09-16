const mongoose = require('mongoose');
const foodSchema = new mongoose.Schema({
    foodname:{
        type:String,
     
    },
    foodimage:{
        type:String
    },
    price:{
        type:String,
     
    },
    restaurant:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Store"
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
},{timestamps:true});

module.exports=mongoose.model('Product',foodSchema);