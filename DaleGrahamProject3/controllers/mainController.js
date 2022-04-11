//const model = require('../models/mainModel')
//GET /connections: send all connections to users
exports.index = (req,res) =>{
    //res.send('send all connections')
    res.render('./index');
};

// GET /connections/new: send html form for creating new connection
exports.about = (req,res) =>{
    res.render('./about');
};

exports.contact = (req,res) =>{
    res.render('./contact');
};