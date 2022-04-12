var mongoose = require('mongoose')
var express = require('express')
var app = express()

mongoose.connect('mongodb://localhost:27017/validator',(err)=>{
    if(err) throw err;
    else  console.log('db connect');
})

module.exports = mongoose;
