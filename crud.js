var crud = require('../model/adminschema')


exports.finduser=function(req,res){
    adminschema.findones({id:2005},{name:1},function(err,userdata){
        if(userdata==0){
            res.send('find error');
        }else{
            res.send(userdata)
        }
    })
}