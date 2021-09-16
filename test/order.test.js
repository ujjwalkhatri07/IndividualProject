const express = require('express');
require('dotenv').config();
const orderRouter = require('../models/order');
var ObjectId = require('mongodb').ObjectID;

// Setup
require('./setup');

describe('Test of Order Route', () => {
    test('it should add a new order',()=>{
        return orderRouter.create({
            _id: ObjectId('6026324d9243b507d0df744a'),   
            food: ObjectId('6026324d9243b507d0df744a'),
            dateTime: '10/2/2021', 
            user: ObjectId('6026324d9243b507d0df744f'), 
            quanity: '5',
            notes:'aa'
        }).then((Response)=>{
            expect(Response.food).toStrictEqual(ObjectId('6026324d9243b507d0df744a'))
            expect(Response.dateTime).toBe('10/2/2021')
            expect(Response.user).toStrictEqual(ObjectId('6026324d9243b507d0df744f'))
            expect(Response.quanity).toBe('5')
            expect(Response.notes).toBe('aa') 
        })
    })

    test('it should retrieve the order details',()=>{
        return orderRouter.findById({_id: ObjectId('6026324d9243b507d0df744a')})
        .then((Response)=>{
            expect(Response.food).toStrictEqual(ObjectId('6026324d9243b507d0df744a'))
            expect(Response.dateTime).toBe('10/2/2021')
            expect(Response.user).toStrictEqual(ObjectId('6026324d9243b507d0df744f'))
            expect(Response.quanity).toBe('5')
            expect(Response.notes).toBe('aa') 
        })
    })

    test('it should update the order details',()=>{
        return orderRouter.findByIdAndUpdate({_id: ObjectId('6026324d9243b507d0df744a')},
        {   
            food: ObjectId('6026324d9243b507d0df744b'),
            dateTime: '12/2/2021', 
            user: ObjectId('6026324d9243b507d0df744c'), 
            quanity: '2',
            notes:'bb'
        }, {new: true})
        .then((Response)=>{
            expect(Response.food).toStrictEqual(ObjectId('6026324d9243b507d0df744b'))
            expect(Response.dateTime).toBe('12/2/2021')
            expect(Response.user).toStrictEqual(ObjectId('6026324d9243b507d0df744c'))
            expect(Response.quanity).toBe('2')
            expect(Response.notes).toBe('bb') 
        })
    })

    test('it should delete the order',()=>{
        return orderRouter.findByIdAndDelete({_id: ObjectId('6026324d9243b507d0df744a')})
        .then((Response)=>{
            expect(Response._id).toStrictEqual(ObjectId('6026324d9243b507d0df744a'))
        })
    })
})