
//GET /connections: send index page
exports.index = (req,res) =>{
    //res.send('send all connections')
    res.render('./index');
};

// GET /connections/new: send about page
exports.about = (req,res) =>{
    res.render('./about');
};

exports.contact = (req,res) =>{
    res.render('./contact');
};

