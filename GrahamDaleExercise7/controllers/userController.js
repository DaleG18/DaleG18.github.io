const model = require('../models/user');
exports.index = (req, res, next)=>{
    //res.send('send all stories');
    model.find()
    .then(user=>res.render('./users/new', {users}))
    .catch(err=>next(err));
};

//signup form get
exports.new = (req, res)=>{
    res.render('./user/new');
};


// create a new user
exports.create= (req,res,next)=>{
    let user = new User(req.body);
    user.save()
    .then(()=>res.redirect('/users/login'))
    .catch(err =>{
        if(err.name === 'ValidationError'){
            req.flash('error',err.message);
            return res.redirect('/users/new');
        }
        if(err.code === 11000){
            req.flash('error',"Email address has been used")
            return res.redirect('/users/new');
        }
    });
};

//get the login form get
exports.show = (req,res) =>{
    console.log(req.flash());
    res.render('./user/login');
};

//process login request post
exports.request= (req,res,next)=>{
    //authenticate users login requests
    let email = req.body.email;
    let password = req.body.password;

    //get the user that matchess the email
    model.findOne({email: email}) //advice taken from piazza
    .then(user => {
        if(user){
            //user found in db
            user.comparePassword(password)
            .then(result => {
                if(result){
                    req.session.user = user._id;
                    req.flash('success', 'You have successfully logged in');
                    res.redirect('/users/profile');
                }else{
                    //console.log('wrong password');
                    req.flash('error', 'Wrong Password')
                    res.redirect('/users/login');
                }
            })
        }else{
            //console.log('wrong email address');
            req.flash('error', 'Wrong Email Address')
            res.redirect('/users/login');
        }
    })
    .catch(err=> next(err));
};
//get
exports.profile = (req,res,next)=>{
    let id = req.session.user;
    console.log(req.flash());
    model.findById(id) //adivce taken from piazza
    .then(user => res.render('./user/profile',{user}))
    .catch(err=> next(err));
};
//get
exports.delete = (req,res,next) =>{
    req.session.destroy(err=>{
        if(err)
            return next(err);
        else
            res.redirect('/');
    });
};


