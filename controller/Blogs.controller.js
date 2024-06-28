const BlogModel = require("../models/Blog.model");


function getAllBlogs(req,res) {
   return BlogModel.find();

}

function createBlogs(req,res){
   const Blogs=new BlogModel(req.body);
   return Blogs.save()

}

module.exports={
    getAllBlogs,
    createBlogs,

};