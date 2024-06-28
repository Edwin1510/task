const { getAllBlogs, createBlogs } = require('../controller/Blogs.controller');


const BlogRouter=require('express').Router();

BlogRouter.get("/", async (req, res) => {
  let blogs;
  try {
    blogs = await getAllBlogs(req, res);
  } catch (error) {
    console.log(error);
  }
  return res.status(200).json({
    message: "Blogs fetched successfully",
     data: blogs,  
  });
});
    

BlogRouter.post("/create", async (req, res) => {
    try {
      const response = await createBlogs(req);
      if (response && response._id) {
        return res.status(200).json({
          message: "Blogs Created successfully",
          success: true,
        });
      } else {
        return res.status(500).json({
          message: "Something went wrong",
          success: false,
        });
      }
    } catch (error) {
      return res.status(400).json({
        error: error,
        success: false,
      });
    }
  });



  
  
  

module.exports=BlogRouter;







