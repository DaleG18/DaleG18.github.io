const Connect = require('../models/connection');
const { connect } = require('../routes/conRoutes');
//GET /connections: send all connections to users
exports.index = (req,res) =>{
    
   let data = {};
   Connect.find()
   .then(connections => {
       data.connections = connections;
       return Connect.distinct('topic');
   })
   .then(topics => {
       data.topics = topics;
       res.render('./connection/index', { data: data });
   })
   .catch(err => next(err));
};

// GET /connections/new: send html form for creating new connection
exports.new = (req,res) =>{
    res.render('./connection/newConnection')
};

//POST /connections: create a new connection
exports.create = (req,res,next) =>{
    let connect = new Connect(req.body);
    connect.save()
    .then(() => res.redirect('/connections'))
    .catch(err => next(err))
};

//GET /connections/:id : send details of connection identified by id
exports.show =  (req,res,next) =>{
    let id = req.params.id;
    Connect.findById(id)
    .then(connection =>{
        if(connection){
            res.render('./connection/connection',{connection});
            }else{
           let err = new Error('Cannot find a connection with id ' + id);
           err.status = 404;
           next(err); }
    })
    .catch(err => next(err))
    }

//GET /connections/:id/edit : send html form for editing existing connection
exports.edit = (req,res,next) =>{
    let id = req.params.id;
   Connect.findById(id)
   .then(connection =>{
    if(connection){
        res.render('./edit',{connection});
    }else{
        let err = new Error('Cannot find a connection with id ' + id);
        err.status = 404;
        next(err);
         }

   })
    .catch(err => next(err))
};

//PUT /connections/:id : update connection by id
exports.update= (req,res,next)=>{
    let connection = req.body;
    
    let id = req.params.id
    Connect.findByIdAndUpdate(id, connection)
    .then(result => {
        if(result){
            res.redirect('/connections/'+ id);
        }else{
            let err = new Error('Cannot find a connection with id ' + id);
        err.status = 404;
        next(err);
        }

    })
    .catch(err=> {
        if(err.name === 'ValidationError') {
            err.status = 400;
        }
        next(err);
    }); 
};


//DELETE /connections/:id : delete a connection
exports.delete= (req,res,next) =>{
    let id = req.params.id
    Connect.findByIdAndDelete(id)
    .then(result => {
        if(result){
                res.redirect('/connections');
            }else{
                let err = new Error('Cannot find a connection with id ' + id);
                err.status = 404;
                next(err);
            }
    })
    .catch(err => next(err))
};

