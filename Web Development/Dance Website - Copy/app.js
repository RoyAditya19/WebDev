//"npm init" was used to install the package.json file, then "npm install express" was used for getting the node modules, then mongoose,pug,mongodb was also installed and many more....


const http = require("http");
const port = 8000;
const express = require("express");
const path = require("path");
const app = express();                                                                  //express module has been imported and has been saved in "app" variable
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/contactDance',{useNewUrlParser: true});
const bodyparser = require("body-parser")                                               //it is a middleware used to get your requested data when you write "req.body"

//Defining schema
const dSchema = new mongoose.Schema({
    name:String,                                                                        //a schema has been constructed and this schema will now be converted into a model
    phone:Number,
    Email: String,
    adress: String,
    Query: String
})

//constructing model from the above schema
var Model = mongoose.model('Model',dSchema)                                             //a model driven out from the schema


//express related stuff
app.use('/static',  express.static('static'));                                          //it is bascially accessing the static folder
app.use(express.urlencoded());                                                          //built-in middle ware which parses incoming requests and is based on body parser

//pug related stuff
app.set('view engine', 'pug');                                                          //setting the view engine as pug
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req,res)=>
{
    res.status(200).render('home.pug');                                                   // a get request which will render home.pug when this("/") particular url will be clicked
})

app.get('/contact', (req,res)=>
{
    res.status(200).render('contact.pug');                                                  // a get request which will render contact.pug when this("/contact") particular url will be clicked
})

app.post('/contact', (req,res)=>
{
    let myData = new Model(req.body);                                                       //here "req.body" is basically used to get all the data which has been entered in the form
    myData.save().then(()=>{                                                                //a post request which will save all the data entered in a form and that data is being saved to "myData" variable
        res.send("this data has been saved")
    }).catch(()=>{
        res.status(400).send("item was not send")
    });
})

// app.post('/', (req, res)=>
// {
//     res.status(200).render('index.pug')
// })



app.listen(port, ()=>{
console.log(`your server is running at port :${port}`);
})