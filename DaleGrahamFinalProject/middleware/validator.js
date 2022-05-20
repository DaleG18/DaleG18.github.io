const {body} = require('express-validator');
const {validationResult} = require('express-validator');  

exports.validateId = (req, res, next)=>{
    let id = req.params.id;
    //an objectId is a 24-bit Hex string
    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        let err = new Error('Invalid story id');
        err.status = 400;
        return next(err);
    } else {
        return next();
    }
};

exports.validateSignUp = [body('firstName',"First name cannot be empty").notEmpty().trim().escape(),
body('lastName',"Last Name cannot be empty").notEmpty().trim().escape(),
body('email',"Email must be a valid email address").isEmail().trim().escape().normalizeEmail(),
body('password', "Password must be at least 8 characters and at most 64 characters").isLength({min: 8, max: 64})];

exports.validateLogIn = [body('email',"Email must be a valid email address").isEmail().trim().escape().normalizeEmail(),
body('password', "Password must be at least 8 characters and at most 64 characters").isLength({min: 8, max: 64})];

exports.validateResult = (req,res,next) =>{
let errors = validationResult(req);
if(!errors.isEmpty()){
    errors.array().forEach(error =>{
        req.flash('error', error.msg);
    });
    return res.redirect('back');
}else{
    return next();
    }
}

exports.validateConnect = 
[body('title', "Title cannot be empty").notEmpty().trim().escape(),
body('topic', "Topic cannot be empty").notEmpty().trim().escape(),
body('details',"Details must me a minimum of 10 characters").trim().escape(),
body('date', "Date cannot be empty").isDate().isAfter(),
body('startTime').matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/).trim(),
body('endTime').matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/).trim(),
body('endTime').custom((endTime, { req }) => {
    let startTime = req.body.startTime;
    let startTimeMinutes= parseInt(startTime.split(':')[0]) * 60 + parseInt(startTime.split(':')[1]); 
    let endTimeMinutes= parseInt(endTime.split(':')[0]) * 60 + parseInt(endTime.split(':')[1]);
    if(startTimeMinutes >= endTimeMinutes){
        throw new Error("End time must be after start time");
    }else {
        return true;
    }
}),
body('hostName', "Host name cannot be empty").notEmpty().trim().escape()];
//body('imageURL', "Image cannot be empty").notEmpty().trim().escape()
