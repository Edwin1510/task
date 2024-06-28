
const { createAUser, loginUser, getdata } = require("../controller/Auth.controller");


const AuthRouter = require("express").Router();


AuthRouter.post("/signup", async (req, res) => {
    try {
      const user = await createAUser(req, res);
      if (user._id) {
        return res.status(200).json({
          success: true,
          message: "Account creation successful",
        });
      } else {
        return res.status(500).json({
          success: false,
          message: "Something went wrong",
        });
      }
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "Something went wrong",
        error,
      });
    }
  });

  AuthRouter.post("/signin", async (req, res) => {
    try {
      const Matcheduser = await loginUser(req, res);
      if (Matcheduser && Matcheduser._id){
        if (Matcheduser.password === req.body.password){
          
          return res.status(200).json({
            success: true,
            message: "Account creation successful",
          });

        }
      }
       else {
        return res.status(500).json({
          success: false,
          message: "Something went wrong",
        });
      }
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "Something went wrong",
        error,
      });
    }
  });
  AuthRouter.patch("/reset", async (req, res) => {
    try {
      const Matcheduser = await loginUser(req, res);
      if (Matcheduser && Matcheduser._id){
        if (Matcheduser.password === req.body.password){
          if(req.body.forgotpassword){
            Matcheduser.password =req.body.forgotpassword;
            await Matcheduser.save()
          
          return res.status(200).json({
            success: true,
            message: "reset passward creation successful",
          });
        }
        }
      }
       else {
        return res.status(500).json({
          success: false,
          message: "Something went wrong",
        });
      }
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "Something went wrong",
        error,
      });
    }
  });

  AuthRouter.get("/get",async(req,res)=>{
     let data;
    try{
    data=  await getdata(req,res)
    }catch(error){
      console.log(error)
    }       
      return   res.status(400).json({
          message:"get request successfully",
          Details:data
        })
  })
  

  
          

  module.exports=AuthRouter;

  