const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

  username:{
    type : String,
    required:true,
    unique:[true,"the username already exists"]
  },
  email:{
    type: String,
    required:true,
    unique:[true,"the email already exists"]
  },
  password:{
    type:String,
    required:true
  },
})

const usermodel = mongoose.model("users",userSchema)

module.exports = usermodel;