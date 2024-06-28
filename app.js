const express=require('express');
const connectToMongoDB = require('./views/database.cofig');

const API_SERVER=express();

connectToMongoDB();
API_SERVER.use("/edw",require("./routers/blog.router"));
API_SERVER.use("/auth",require("./routers/Auth.router"))


    module.exports=API_SERVER;