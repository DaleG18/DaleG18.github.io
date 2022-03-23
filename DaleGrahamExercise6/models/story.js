const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema({
    title:{type: String, required:[true, 'title is required']},
    author:{type: String, required:[true, 'author is required']},
    content:{type: String, required:[true, 'content is required'],
        minLength:[10,'the content should have at least 10 characters']}
},
{timestamps:true}
);
//collection name is stories in the database
module.exports = mongoose.model('Story', storySchema);


/*
let story = new Story ({
    title: 'test',
    author: 'Dale Graham',
    content:'test, test, and test'
}
);

story.validate()
.then(() =>{
    console.log('validated sucessfully');
})
.catch(err =>console.log(err.message));


console.log(story);
*/