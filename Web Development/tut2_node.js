// console.log("hello world");

const http = require("http");
const hostname = '127.0.0.1';
const port = 5500;

const server = http.createServer((req, res) => 
{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');                         //here if you write "html" instead of "plain then you can run a html file
    res.end('Hello World');                                             // use backticks(``) instead of inverted commas when u r importing an html code to the end module
    
});

server.listen(port, hostname, () => 
{
    console.log(`Server running at http://${hostname}:${port}/`);
});


// const http = require("http");
// const hostname1 = '127.0.0.2';
// const port1 = 5000;

// http.createServer((req, res)=>{
// res.statusCode = 200;
// res.setHeader = ("Content-Type", "text/plain");
// res.end('hello world');
// });

// server.listen(port, hostname1, ()=>{
//     console.log("server running at http://${hostname1}:${port}");
// })

