const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conSchema = new Schema({
    title: {type: String, required:[true, 'cannot be empty']}, 
    topic: {type: String, required:[true, 'cannot be empty']}, 
    details: {type: String, required:[true, 'cannot be empty']}, 
    date: {type: Date, required:[true, 'cannot be empty']}, 
    startTime:{type: String, required:[true, 'cannot be empty']}, 
    endTime: {type: String, required:[true, 'cannot be empty']}, 
    hostName: {type: String, required:[true, 'cannot be empty']}, 
    imageURL: {type: String, required:[true, 'cannot be empty']}, 
});

module.exports = mongoose.model('Connection',conSchema);
