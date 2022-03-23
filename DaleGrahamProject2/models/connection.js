const { DateTime } = require("luxon");
const {v4: uuidv4} = require('uuid');
const connections = [
{
    id: '1',
    topic: 'Anime',
    title: 'Want to discuss the latest one piece manga?',
    hostName: 'Dale Graham', 
    details:'Get the scoop and discuss the latest one piece chapters',
    where: 'Woodward Hall',
    date: DateTime.local(2021,3,4).toLocaleString(DateTime.DATETIME_SHORT),
    startTime: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    endTime: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    image:'http://www.onepiecepodcast.com/wp-content/uploads/2016/09/oda-fish.png' ,
},
{
    id: '2' ,
    title: 'Lets watch Attack on Titan!',
    topic: 'Anime',
    details:'Join your fellow Attack on Titan fans',
    where: 'Student Union',
    date: DateTime.local(2021,3,4).toLocaleString(DateTime.DATETIME_SHORT),
    startTime: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    endTime: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    hostName: 'Dale Graham',
    image:'https://bookriot.com/wp-content/uploads/2022/01/manga-series-1280x720.png' ,
},
{
    id: '3',
    title: 'Naruto Shippuden and Snacks :)',
    topic: 'Anime',
    details:'Lets recap the great anime',
    where: 'Library',
    date: DateTime.local(2021,3,4).toLocaleString(DateTime.DATETIME_SHORT),
    startTime: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    endTime: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    hostName: 'Dale Graham',
    image:'https://otakukart.com/wp-content/uploads/2022/01/naruto-six-paths-1140x641.jpg' ,
},
{
    id: '4',
    title: 'Looking for a lift partner?',
    topic: 'Sports',
    details:'Need someone to spot you? We got you',
    where: 'Woodward Hall',
    date: DateTime.local(2021,3,4).toLocaleString(DateTime.DATETIME_SHORT),
    startTime: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    endTime: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    hostName: 'Dale Graham', 
    image:'https://www.bodybuilding.com/fun/images/2015/layne-norton-bench-tutorial-graphics-5-700xh.jpg' ,
},
{
    id: '5',
    title: 'Click for a hoop session!',
    topic: 'Sports',
    details:'Need someone to play basketball with?',
    where: 'Woodward Hall',
    date: DateTime.local(2021,3,4).toLocaleString(DateTime.DATETIME_SHORT),
    startTime: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    endTime: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    hostName: 'Lawrence Grandberry', 
    image:'https://img.grouponcdn.com/iam/2vY7jzoUhdzVpkSDZX6vqzgwwE98/2v-2048x1229/v1/c870x524.jpg' ,
},
{
    id:'6',
    title: 'Lets go bowling!',
    topic: 'Sports',
    details:'Whether its a spare or a strike, lets have fun!',
    where: 'Woodward Hall',
    date: DateTime.local(2021,3,4).toLocaleString(DateTime.DATETIME_SHORT),
    startTime: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    endTime: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
    hostName: 'Jaicie Smallwood', 
    image:'https://recoinstitute.com/wp-content/uploads/2018/09/cheerful-friends-bowling-alley-balls.jpg' ,
},

];

exports.find = function(){
    return connections;
}

exports.findById = function(id){
    return connections.find(connection =>connection.id === id);
};

exports.save =function(connection){ 
    connection.id = uuidv4();
    connection.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    connections.push(connection);
}

exports.updateById = function(id,newConnection){
    let connection= connections.find(connection => connection.id ===id);
    if(connection){
        connection.title = newConnection.title;
        connection.details = newConnection.details;
    return true;
    }
    else{
        return false;
    }
}
exports.deleteById = function(id){
    let index = connections.findIndex(connection =>connection.id === id);
        if(index !== -1){
            connections.splice(index,1);
            return true;
        }    else{
            return false;
        }
    
}