const model = require('../models/connection')
//GET /connections: send all connections to users
exports.index = (req,res) =>{
    //res.send('send all connections')
    let connections = model.find();
    res.render('./connection/index',{connections});
};

// GET /connections/new: send html form for creating new connection
exports.new = (req,res) =>{
    res.render('./connection/newConnection')
};

//POST /connections: create a new connection
exports.create = (req,res) =>{
    let connection = req.body;
    model.save(connection);
    res.redirect('/connections')
};

//GET /connections/:id : send details of connection identified by id
exports.show =  (req,res,next) =>{
    let id = req.params.id;
    let connection = model.findById(id);
    if(connection){
    res.render('./connection/connection',{connection});
    }else{
   let err = new Error('Cannot find a connection with id ' + id);
   err.status = 404;
   next(err);
    }
};

//GET /connections/:id/edit : send html form for editing existing connection
exports.edit = (req,res) =>{
    let id = req.params.id;
    let connection = model.findById(id);
    if(connection){
        res.render('./edit',{connection});
    }else{
        let err = new Error('Cannot find a connection with id ' + id);
        err.status = 404;
        next(err);
         }
};

//PUT /connections/:id : update connection by id
exports.update= (req,res,next)=>{
    let connection = req.body;
    
    let id = req.params.id;

    if(model.updateById(id,connection)){
        res.redirect('/connections/' + id);

    }else{
        let err = new Error('Cannot find a connection with id ' + id);
        err.status = 404;
        next(err);
         }
};

//DELETE /connections/:id : delete a connection
exports.delete= (req,res,next) =>{
    let id = req.params.id;
    if(model.deleteById(id)){
        res.redirect('/connections');
    }else{
        let err = new Error('Cannot find a connection with id ' + id);
        err.status = 404;
        next(err);
         }
};

