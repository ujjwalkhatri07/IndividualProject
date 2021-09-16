const express = require('express');
require('dotenv').config();
const cartRouter = require('../models/cart');
var ObjectId = require('mongodb').ObjectID;

// Setup
require('./setup');

describe('Test of Cart Route', () => {
    test('it should add a new cart',()=>{
        return cartRouter.create({
            _id:ObjectId('6026324d9243b507d0df744c'),    
            food:ObjectId('6104077450ae4e163c43610b'),
            totalprice: 850, 
            user: ObjectId('60efd992f1676737d892045e'), 
            quanity: 5,
            notes:'Good'
        }).then((Response)=>{
            expect(Response.food).toStrictEqual(ObjectId('6104077450ae4e163c43610b'))
            expect(Response.totalprice).toBe(850)
            expect(Response.user).toStrictEqual(ObjectId('60efd992f1676737d892045e'))
            expect(Response.quanity).toBe(5)
            expect(Response.notes).toBe('Good') 
        })
    })

    test('it should retrieve the cart details',()=>{
        return cartRouter.findById({_id:ObjectId('6026324d9243b507d0df744c')})
        .then((Response)=>{
            expect(Response.food).toStrictEqual(ObjectId('6104077450ae4e163c43610b'))
            expect(Response.totalprice).toBe(850)
            expect(Response.user).toStrictEqual(ObjectId('60efd992f1676737d892045e'))
            expect(Response.quanity).toBe(5)
            expect(Response.notes).toBe('Good') 
        })
    })

    test('it should update the cart',()=>{
        return cartRouter.findByIdAndUpdate({_id:ObjectId('6026324d9243b507d0df744c')},
        {
            food:ObjectId('6026324d9243b507d0df744b'),
            totalprice: 1050, 
            user: ObjectId('6026324d9243b507d0df748b'), 
            quanity: 2,
            notes:'Make'
        }, {new: true})
        .then((Response)=>{
            expect(Response.food).toStrictEqual(ObjectId('6026324d9243b507d0df744b'))
            expect(Response.totalprice).toBe(1050)
            expect(Response.user).toStrictEqual(ObjectId('6026324d9243b507d0df748b'))
            expect(Response.quanity).toBe(2)
            expect(Response.notes).toBe('Make') 
        })
    })

    test('it should delete the cart',()=>{
        return cartRouter.findByIdAndDelete({_id:ObjectId('6026324d9243b507d0df744c')})
        .then((Response)=>{
            expect(Response._id).toStrictEqual(ObjectId('6026324d9243b507d0df744c'))
        })
    })
})