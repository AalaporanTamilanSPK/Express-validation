var express = require('express')
var app =express()
const mongoose = require('mongoose')
const { model } = require('../config/dbcreate')
var admindb= require('../config/dbcreate')

const admin=admindb.Schema({
    Admin:{
        type:String,
        require:true,
        unique:true
    },
    Id:{
        type:String
    },
    Password:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true,
        unique:true
    },
})
module.exports=admindb.model('Admin',admin)