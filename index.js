var express =require('express')
var app = express()
var mongoose = require('mongoose');
var mongoose = require('./validator expressjs/config/dbcreate');
var routes = require('./validator expressjs/controller/router')


app.use('/bank',routes)


app.listen(4000,()=>{
    console.log('Server Running successfully');
});


