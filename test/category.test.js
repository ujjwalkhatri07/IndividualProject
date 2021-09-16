const express = require('express');
require('dotenv').config();
const foodCategoryRouter = require('../models/Category');
var ObjectId = require('mongodb').ObjectID;

// Setup
require('./setup');

describe('Test of Category Route', () => {
    test('it should add a new category',()=>{
        return foodCategoryRouter.create({  
            _id:ObjectId('6026324d9243b507d0df744c'),  
            category:'Home',
            catImg: 'image.jpg', 
        }).then((Response)=>{
            expect(Response.category).toBe('Home')
            expect(Response.catImg).toBe('image.jpg')    
        })
    })

    test('it should retrieve category details',()=>{
        return foodCategoryRouter.findById({_id:ObjectId('6026324d9243b507d0df744c')})
        .then((Response)=>{
            expect(Response.category).toBe('Home')
            expect(Response.catImg).toBe('image.jpg')    
        })
    })

    test('it should update the category details',()=>{
        return foodCategoryRouter.findByIdAndUpdate({_id:ObjectId('6026324d9243b507d0df744c')},
        {  
            category:'Drinks',
            catImg: 'imageCoca-Cola.jpg', 
        }, {new: true})
        .then((Response)=>{
            expect(Response.category).toBe('Drinks')
            expect(Response.catImg).toBe('imageCoca-Cola.jpg')    
        })
    })

    test('it should delete the category',()=>{
        return foodCategoryRouter.findByIdAndDelete({_id:ObjectId('6026324d9243b507d0df744c')})
        .then((Response)=>{
            expect(Response._id).toStrictEqual(ObjectId('6026324d9243b507d0df744c'))
        })
    })
})