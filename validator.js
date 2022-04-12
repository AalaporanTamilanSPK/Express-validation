const {check,validationResult} = require('express-validator');
// const { send } = require('express/lib/response');
exports.userval=[
    check('Name')
    .not()
    .isEmpty().withMessage('please file the name field')
    .isAlpha().withMessage('plesse file the alaphbets only'),

    check('Age')
    .not()
    .isEmpty().withMessage('please file the Age field')
    .isNumeric().withMessage('plesse file the Number only'),

    check('City')
    .not()
    .isEmpty().withMessage('please file the city field')
    .isAlpha().withMessage('plesse file the alaphbets only'),

    check('Account')
    .not()
    .isEmpty().withMessage('please file the Account field')
    .isNumeric().withMessage('plesse file the Acc Number only'),

    check('Password')
    .not()
    .isEmpty().withMessage('please file the Password field')
    .isLength({ min: 8 }).withMessage('please fill valid password'),
    // .matches( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/).withMessage('This correct Password'),

    check('Dob')
    .not()
    .isEmpty().withMessage('please file the Dataofbrith field'),
    
    check('Moblienumber')
    .not()
    .isEmpty().withMessage('please file the Moblienumber field')
    .isLength({ min: 10 }).withMessage('please fill valid phonenumber')
    .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im),
    

    check('Email')
    .not()
    .isEmpty().withMessage('please file the email field')
    .isEmail().withMessage('This email valid'),

    check('Address')
    .not()
    .isEmpty().withMessage('please file the Address field')
];
exports.usercheck=(req,res,next)=>{
    const result= validationResult(req).array();
    if(!result.length)
    return next();

    const error=result[0].msg;
    res.send({success:false,message:error})
}