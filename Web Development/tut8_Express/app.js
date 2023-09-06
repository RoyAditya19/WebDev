const express = require("express");
const fs = require("fs");
const { request } = require("http");
const path = require("path");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded()) //middleware which fetches you data once the form/data has been filled/submitted.

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory


// ENDPOINTS
app.get('/', (req, res)=>
{
    const con = "This is the Content.";
    const tit = "First Node Website"
    const params = {"title":tit, "content": con}
    res.status(200).render('index.pug', params);                        //we are using render because we are rendering templates, but when we want to render an html file then instead of "render" we will be using "send"/"end".
})


app.post('/', (req, res)=>
{   
    Name = req.body.Name
    age = req.body.age
    let outputtowrite = `the name of the client is ${Name} and his/her age is: ${age}`;


    fs.writeFileSync('Contacts.txt', outputtowrite)
    res.status(200).render('index.pug');
})

// app.get('/', (req, res)=>{
//     const con = "This is the best content on the internet so far so use it wisely"
//     const params = {'title': 'PubG is the best game', "content": con}
//     res.status(200).render('index.pug', params);
// })


//starting server
app.listen(port, ()=>
{
    console.log(`the application started successfully at port ${port}`);
})


















//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const express  = require("express")
// const path = require("path")
// const app = express();
// const port4 = 80;


// //for serving static files
// app.use('/static', express.static('static'))

// //set the template engine for pug
// app.set('view-engine', 'pug')
// app.set('views', path.join(__dirname, 'views'))

// //Our pug demo end point
// app.get('/demo', (req, res)=>
// {
//     res.status(200).render('demo', {title : 'Hey', message: 'Hello there! '})
// })
// //---------------------//

// app.get('/', (req, res)=>
// {
//     res.send("This is the first express app");
// })

// app.get('/about', (req, res)=>                                      //this is the get request 
// {
//     res.send("This is the about page of express app");   
// })

// app.post('/about', (req, res)=>                                     // this is the post request, but it contains same "/about" thing. it gets rendered when you select post option in postman application
// {
//     res.send("This is the first express app");
// })
// app.get('/this', (req, res)=>                                       //this is the get request and it also contains status code, and whenever anyone hits "/this" it will say this page was not found.
// {
//     res.status(404).send("This page was not found");
// })


// app.listen(port4, ()=>
// {
//     console.log(`the application has run successfully at port: ${port4}`);
// })