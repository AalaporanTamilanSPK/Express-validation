var express =require('express');
var mongoose =require('mongoose');
var mongoose=require('../config/dbcreate')
var Bankacc =new mongoose.Schema({

    Name:{type:String,
    require:true,
    min:3,
    max:15},

    Age:{type:Number,
    require:true},

    City:{type:String},

    Account:{type:Number,
    require:true},

    Password:{type:String,
        require:true},

    Dob:{type:Number,
        require:true},

    Email:{type:String,
    require:true,
    unique:true}, 

    moblienumber:{
        type:Number,
        require:true},

    Address:{type:String,
    require:true}        

});

module.exports=mongoose.model("Bankuser",Bankacc);