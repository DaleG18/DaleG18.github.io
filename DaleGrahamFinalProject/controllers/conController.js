const Connect = require('../models/connection');
const Rsvp = require('../models/rsvp');
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
    connect.author = req.session.user;
    connect.save()
    .then(story=> {
        req.flash('success', 'Story has been created successfully');
        res.redirect('/connections');
    })
    .catch(err=>{
        if(err.name === 'ValidationError' ) {
        req.flash('error', err.message);
        return res.redirect('/back');
        }
        next(err);
    });
};

//GET /connections/:id : send details of connection identified by id
exports.show =  (req,res,next) =>{
    let id = req.params.id;
    Promise.all([Connect.findById(id).populate('author', 'firstName lastName'), Rsvp.find({connection:id, rsvp:'Yes'})])
    .then(results =>{
        const [connection, rsvps] = results;
        if(connection){
            res.render('./connection/connection',{connection, rsvps});
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
    return res.render('./edit',{connection});
   })
    .catch(err => next(err))
};

//PUT /connections/:id : update connection by id
exports.update= (req,res,next)=>{
    let connection = req.body;
    
    let id = req.params.id
    Connect.findByIdAndUpdate(id, connection, {useFindAndModify: false, runValidators: true})
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
                req.flash('error', err.message);
                return res.redirect('/back');
            }
            next(err);
        });
};


//DELETE /connections/:id : delete a connection
exports.delete= (req,res,next) =>{
    let id = req.params.id
    Connect.findByIdAndDelete(id,  {useFindAndModify: false})
    .then(result => {
        if(result){
                res.redirect('/connections');
            }else{
                let err = new Error('Cannot find a connection with id ' + id);
                err.status = 404;
                next(err);
            }
    })
    .catch(err => next(err));

    Rsvp.deleteMany({connection:id}, {useFindAndModify:false})
    .then(result =>{
        res.redirect('/connections');
    })
    .catch(err => next(err));
};


exports.rsvp = (req,res,next) =>{
    let id = req.params.id;
    let rsvp = req.params.rsvp;
    let user = req.session.user;
    
    let userRsvp = {
        connection:id,
        rsvp: req.body.rsvp,
        user: req.session.user.id
    }

    Rsvp.findOneAndUpdate({connection:id, user:user},userRsvp, {useFindAndModify: false, runValidators:true,upsert:true, new:true})
    .then(rsvp => {
        req.flash('success', 'Succesful RSVP!');
        res.redirect('/users/profile');
    })
    .catch(err => next(err));
};
    /*
    if the user is not logged in, the app redirects to the login page.
if the user is logged in and is the host of the connection, the app renders the error page with a 401 error.
If the user is logged in and is not the host of the connection, the app process the RSVP request by creating a new 
rsvp document or updating an existing document in the database
An authorized user may click a connection's RSVP buttons multiple times, but there should be only one entry to 
record the most updated RSVP status, i.e., the app should not add multiple entries to the rsvp collection for rsvp 
requests from the same user for the same connection.  Hint: The findOneAndUpdate() (Links to an external site.) 
function in Mongoose can be used in this case. 
    */

