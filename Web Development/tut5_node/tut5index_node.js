const http = require('http');
const fs = require('fs');                                       //it imports file system module which is used for writing or reading the files stored in our systems, basically it works with the file system of our computer


const hostname = '127.0.0.1';
const port = 5500;

const index = fs.readFileSync('index.html')                     //reading the file. it will keep on reading the file till the end of the content of the file and will not move to further line of code unless and until it has read the whole content.
const about = fs.readFileSync('./about.html')                   // here "./" has been used bcoz the file "about.html" exist in this particular folder only and not in any other directory/folder.
const services = fs.readFileSync('./services.html')
const contact = fs.readFileSync('./contact.html')



const server = http.createServer((req,res)=>{
    console.log(req.url)                                         //it tells you that which particular type of url user has requested. and whenever you type any specific domain like(/contacts),"/contacts" will be printed in the console section. 
    url = req.url;                                              // in this, the name of the requested domain gets saved and it is used in the following "if-else" case.
    res.writeHead(200,{'Content-Type':'text/html'})

    if(url == '/')
    {
        res.end(index);                                         // it basically tells that when the url "/" will be hitted it will present "index"(here index is the const variable which has stored the contents of the index.html file) in the name of response
    }
    else if(url == '/about')
    {
        res.end(about);
    }

    else if(url == '/services')
    {
        res.end(services);
    }
    else if(url == '/contact')
    {
        res.end(contact);
    }
    else
    {
        res.statusCode = 404;
        console.log("<h1> 404 not found</h1>");
    }
});

server.listen(port, hostname, ()=>
{

    console.log(`your server is running at http://${hostname}:${port}/`);
});