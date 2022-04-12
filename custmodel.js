var bankshema = require('../model/scheam')
var Adminuser= require('../model/adminschema')
var express =require('express')

var jwt=require('jsonwebtoken')
var app = express();

var bodyparser= require('body-parser');
const adminschema = require('../model/adminschema');
const { json } = require('express/lib/response');
const jsonwebtoken = require('jsonwebtoken');
const { JsonWebTokenError } = require('jsonwebtoken');
app.use(bodyparser.json())

exports.bankdata= function(req,res){
var data = new bankshema()

    data.Name =req.body.Name;
    data.Age = req.body.Age;
    data.City =req.body.City;
    data.Account = req.body.Account;
    data.Password = req.body.Password;
    data.Dob = req.body.Dob;
    data.Email = req.body.Email;
    data.Moblienumber = req.body.Moblienumber;
    data.Address = req.body.Address;

    data.save((err)=>{

    if(err){
        res.send('save error')
        console.log(err)

    }else{
        res.send('regsiter sucessfully');

    }
    });
   
}

// exports.sum= function(req,res){
//     userdata.count({},function(err,result){
//         if(err) throw err;
//         let rest=JSON.stringify(result);
//         res.write(rest);
//         res.end();
//     })
// }

exports.adminadm=function(req,res){
    const adm=new Adminuser()
    adm.Admin=req.body.Admin;
    adm.Id=req.body.Id
    adm.Password=req.body.Password;
    adm.Email=req.body.Email;
    adm.save((err)=>{
        if(err){
            // console.log('error in post Data '+ err);
            res.send('error save')
        }else{
            res.send('success');
        }
    })
}

exports.login=function(req,res){
    adminschema.find({Admin:req.body.Admin},{id:1},function(err,data){
        if(data==0){
            res.send("wrong input!!")
        }else{
            const admindata={
                admin_id:data,
            }
        
        if(admindata.admin_id==data){
            const token=jsonwebtoken.sign({Admin:req.body.Admin},
                "secretkey",{expiresIn:'60s'})
            res.json({data:data,token:token})
        }else{
            res.send('You are not wrongadmin')
        }
    }
    })
}

exports.verify=function(req,res) {

    const bearerHeader = req.headers["authorization"];
  
    if (typeof bearerHeader !== "undefined") {
      const bearerToken = bearerHeader.split(" ")[1];
      req.token = bearerToken;

    jwt.verify(req.token,"secretkey",(err,authData)=>{
        if(err){
            res.sendStatus(403);
        }
        else{
            res.json({
                message:"Post Created",
                verify:"you are login user"
            });
        }
    })
}
else{
      res.sendStatus(403);

}
}
  
  
exports.finduser=function(req,res){
    adminschema.findOne({id:2005},function(err,userdata){
        if(userdata==0){
            res.send('find error');
        }else{
            res.send(userdata)
        }
    })
}

exports.deleteuser=function(req,res){
    adminschema.deleteOne({id:2005},{name:1},function(err,userdata){
        if(userdata==0){
            res.send('find error');
        }else{
            res.send(userdata)
        }
    })
}

exports.updatauser=function(req,res){
    adminschema.updateOne({id:20038},{$set:{name:"prem"}},function(err,userdata){
        if(userdata==0){
            res.send('Update.Error..');
        }else{
            res.send('Update.Success..')
        }
    })
}