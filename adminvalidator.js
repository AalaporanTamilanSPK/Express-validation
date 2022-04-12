const {check,validationResult} = require('express-validator');
// const { send } = require('express/lib/response');
exports.validating=[
    check('Admin')
    .not()
    .isEmpty().withMessage('please file the Name field')
    .isAlpha().withMessage('plesse file the alaphbets only'),

    check('Id')
     .not()
     .isEmpty().withMessage('please file the id field'),
     
    check('Password')
    .not()
    .isEmpty().withMessage('please file the Password field')
    .isLength({ min: 8 }).withMessage('please fill valid password'),
    // .matches( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/).withMessage('This correct Password'),

    check('Email')
    .not()
    .isEmpty().withMessage('please file the email field')
    .isEmail().normalizeEmail(),
 
];

exports.adminvalidation=(req,res,next)=>{
    const result= validationResult(req).array();
    if(!result.length)
    return next();

    const error=result[0].msg;
    res.send({success:false,message:error})
}