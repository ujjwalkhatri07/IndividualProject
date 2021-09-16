const express = require('express');
require('dotenv').config();
const foodRouter = require('../models/Product');
var ObjectId = require('mongodb').ObjectID;

// Setup
require('./setup');

describe('Test of Product Route', () => {
    test('it should add a new Product',()=>{
        return foodRouter.create({  
            _id:ObjectId('6029647169d6ad1e1ce02835'),  
            foodname:'Iphone',
            price: '250', 
            category: ObjectId('6026324d9243b507d0df744f'), 
            restaurant: ObjectId('6026324d4eccbc17b88a9aeb'), 
            foodimage: 'imageIphoneHouse.jpg'
        }).then((Response)=>{
            expect(Response.foodname).toBe('Iphone')
            expect(Response.price).toBe('250')
            expect(Response.category).toStrictEqual(ObjectId('6026324d9243b507d0df744f'))
            expect(Response.restaurant).toStrictEqual(ObjectId('6026324d4eccbc17b88a9aeb'))
            expect(Response.foodimage).toBe('imageIphoneHouse.jpg') 
        })
    })

    test('it should retrieve the product details',()=>{
        return foodRouter.findById({_id:ObjectId('6029647169d6ad1e1ce02835')})
        .then((Response)=>{
            expect(Response.foodname).toBe('Iphone')
            expect(Response.price).toBe('250')
            expect(Response.category).toStrictEqual(ObjectId('6026324d9243b507d0df744f'))
            expect(Response.restaurant).toStrictEqual(ObjectId('6026324d4eccbc17b88a9aeb'))
            expect(Response.foodimage).toBe('imageIphoneHouse.jpg') 
        })
    })

    test('it should update the product',()=>{
        return foodRouter.findByIdAndUpdate({_id:ObjectId('6029647169d6ad1e1ce02835')},
        {  
            foodname:'Iphones',
            price: '350', 
            category: ObjectId('6026324d9243b507d0df744f'), 
            restaurant: ObjectId('6026324d4eccbc17b88a9aeb'), 
            foodimage: 'imageIphoneHouses.jpg'
        }, {new: true})
        .then((Response)=>{
            expect(Response.foodname).toBe('Iphones')
            expect(Response.price).toBe('350')
            expect(Response.category).toStrictEqual(ObjectId('6026324d9243b507d0df744f'))
            expect(Response.restaurant).toStrictEqual(ObjectId('6026324d4eccbc17b88a9aeb'))
            expect(Response.foodimage).toBe('imageIphoneHouses.jpg') 
        })
    })

    test('it should delete the product',()=>{
        return foodRouter.findByIdAndDelete({_id:ObjectId('6029647169d6ad1e1ce02835')})
        .then((Response)=>{
            expect(Response._id).toStrictEqual(ObjectId('6029647169d6ad1e1ce02835'))
        })
    })
})