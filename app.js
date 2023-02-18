const express=require("express");
var app=new express();
var bodyparser=require("body-parser");
const Router=express.Router();
const mongoose =require('mongoose');
const homeRouter=require("./routers/homeRouter")
//var router = express.Router();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(express.static("./public"));
var MongoClient = require('mongodb').MongoClient;

//mongoose.connect("mongodb://localhost:27017/registration",{useNewUrlParser:true});
//const db = mongoose.connection;


let client = new MongoClient("mongodb://127.0.0.1:27017/registration")
console.log("connected");
let db = client.db('registration');
//await db.collection('user').insertOne(req.body)

//db.on("error",()=>{console.log("error in connection")});
//db.once('open',()=>{console.log("connected")});

app.set('view engine','ejs');
app.use('/',homeRouter);



//app.get("/",(req,res)=>{
 // res.sendFile("index.html",{root:__dirname});
//});

//app.get("/login",(req,res)=>{
  //res.sendFile("login.html",{root:__dirname});
//});

//app.get("/view",(req,res)=>{
  //res.sendFile("view.html",{root:__dirname});
//});

//app.get("/signup",(req,res)=>{
  //res.sendFile("signup.html",{root:__dirname});
//});

//router.post('/submit', async function(req,res){
 // console.log(req.body)
  
  //let client = new MongoClient("mongodb://127.0.0.1:27017/registration")
  //console.log("connected");
  //let db = client.db('userdata')
  //await db.collection('user').insertOne(req.body)
  //res.send('got it')
//})
//module.exports = Router;





app.listen(3000,()=>{console.log("server listening on port 3000")});