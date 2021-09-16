const mongoose = require('mongoose');

const foodcategorySchema = new mongoose.Schema({
    category:{
        type:String,
       
    },
    catImg:{
        type:String,
    },
    restaurant:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Store"
    },

},{timestamps:true});

module.exports=mongoose.model('Category',foodcategorySchema);