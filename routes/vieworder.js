const express = require('express');
const Order = require('../models/order');
const router = express.Router();
const auth = require('../auth');


var populateQuery = [{path:'user'}, {path:'food'}];
// router.get('/orders/show/admin',function(req,res){
//     Order.find().then(function(data){
//         res.send(data);
//     })
// })
router.route('/orders/show/admin')
.get((req,res,next)=>{
    Order.find()
    .populate(populateQuery)
    .then((order)=>{
        res.statusCode = 200;
        res.json(order);
    })
})


module.exports = router;