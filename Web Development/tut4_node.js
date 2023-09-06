//serving html files using node.js


const http = require('http');
const fs = require('fs');
// const hostname1 = '127.0.0.1';
// const port = '5502';

const filecontent = fs.readFileSync('myfirstwebsite.html');

const server1 = http.createServer((req,res)=>
{
res.writeHead(200,{'Content-Type':'text/html'});           // here 200 is the status code
res.end(filecontent);                                       //used to serve the content. 
});

server1.listen(80, '127.0.0.1', ()=>
{
    console.log("running at port 80");
})





