const express=require('express');
const Router=express.Router();
const homeSchema=require('../models/homeSchema');
var MongoClient = require('mongodb').MongoClient;

Router.get("/",(err,res)=>{
    res.render('index');
  });

Router.get("/login",(err,res)=>{
  res.render('login',{title:'Fill Form',password:'',email:''});
  });

Router.get("/view",(err,res)=>{
  res.render('view',{title:'Fill Form',password:'',email:''});
  });

Router.get("/signup",(err,res)=>{
  res.render('signup',{title:'Fill Form',password:'',email:''});
  });
//Router.post('/register',async(req,res)=>{
  //try{
      //const {
       // name,
       // email, 
        //password    
 // }=req.body;
  
//}
//  catch(error){
   // res.render('signup',{title:'Error in code',password:'',email:''});
 // }
  //})

Router.post('/register', async function(req,res){
    console.log(req.body)
  
    let client = new MongoClient("mongodb://127.0.0.1:27017/registration")
    console.log("connected");
    let db = client.db('registration')
    await db.collection('user').insertOne(req.body)
    res.send('got it')
})
  module.exports = Router;