const  http = require('http')
const fs = require('fs');

const server = http.createServer((req,res) => {
    console.log(req.url, req.method);

res.setHeader('Content-Type', 'text/plain');
let path = './views/';
})
