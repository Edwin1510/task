const AuthModel = require("../models/Auth.model");

function createAUser(req, res) {
    const User = new AuthModel(req.body);
    return User.save();
  }
  
  function loginUser(req, res) {
    return AuthModel.findOne({ email: req.body.email });
  }

  const getdata=(req,res)=>{
       return AuthModel.find()
  }
  
  module.exports = {
    createAUser,
    loginUser,
    getdata
  };