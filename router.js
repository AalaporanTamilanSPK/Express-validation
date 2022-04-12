var express= require('express')
var  router = express.Router();
var bodyparser= require('body-parser');
router.use(bodyparser.json())

var user = require('../Helpers/custmodel');
// var userfind =require('../Helpers/crud')

const { model } = require('../config/dbcreate');
// const{userval,usercheck}= require('../middleware/validator')
const{validating,adminvalidation}=require('../middleware/adminvalidator')

router.post('/admincheck',validating,adminvalidation,user.adminadm)
router.post('/adminlogin',user.login);
router.post('/verify',user.verify)

// router.post('/finduser',user.finduser)
// router.post('/deleteuser',user.deleteuser)
// router.post('/updatauser',user.updatauser)
// router.post('/register',userval,usercheck,user.bankdata)
// // router.post('/regis',user.bankdata);
// router.post('/count',user.sum);

module.exports=router