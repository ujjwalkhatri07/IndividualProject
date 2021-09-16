const express = require('express');
require('dotenv').config();
const mongoose= require('mongoose');
const userRouter = require('../models/User');

// Setup
require('./setup');

describe('Test of User Route', () => {
    test('it should add a new user',()=>{
        return userRouter.create({    
            fullname:'Hari krishna',
            email: 'harikrishna12@gmail.com', 
            password: 'ujjwal',
            contact:"99999999"
        }).then((Response)=>{
            expect(Response.fullname).toBe('Hari krishna')
            expect(Response.email).toBe('harikrishna12@gmail.com')
            expect(Response.password).toBe('ujjwal'),
            expect(Response.contact).toBe('99999999')    
        })
    })

    test('it should retrieve the user details',()=>{
        return userRouter.findOne({email:'harikrishna12@gmail.com'})
        .then((Response)=>{
            expect(Response.email).toBe('harikrishna12@gmail.com')
            expect(Response.password).toBe('ujjwal')    
        })
    })

    test('it should update the user details',()=>{
        return userRouter.findOneAndUpdate({email:'harikrishna12@gmail.com'}, {fullname:'Ram', password:'ujjwal'}, {new: true})
        .then((updateduser)=>{
            expect(updateduser.fullname).toBe('Ram')
            expect(updateduser.email).toBe('harikrishna12@gmail.com')
            expect(updateduser.password).toBe('ujjwal')          
        })
    })

    test('it should delete the user',()=>{
        return userRouter.findOneAndDelete({email:'harikrishna12@gmail.com'})
        .then((Response)=>{
            expect(Response.email).toBe('harikrishna12@gmail.com')
        })
    })
})