const express=require('express');
const { getAllBlogs } = require('./controller/Blogs.controller');

const WEB_SERVER=express();


WEB_SERVER.get("/",(req,res)=>{
  res.render("pages/signin")
    });

    WEB_SERVER.get("/index",(req,res)=>{
      res.render("pages/index")
        });
  

    WEB_SERVER.get("/about",(req,res)=>{
      res.render("pages/about");
      });

      WEB_SERVER.get("/createblog",(req,res)=>{
        res.render("pages/createblog")
      })
      WEB_SERVER.get("/seba",(req,res)=>{
        res.render("pages/seba")
      })
      WEB_SERVER.get("/signup", (req, res) => {
        res.render("pages/signup");
      });
    
      WEB_SERVER.get("/reset", (req, res) => {
        res.render("pages/resetpassword");
      });

      module.exports=WEB_SERVER;