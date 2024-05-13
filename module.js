const http = require('http');
const sum = require('./app.js');

http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end(`Node works fine with nodemon ${sum(4,5)}`);
    }
    if(req.url === '/home'){
        res.end("Home page working fine");
    }
}).listen(5000);

