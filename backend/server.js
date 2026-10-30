
require("dotenv").config()
const app = require("./src/app.js")
const connectdb= require("./src/Config/database.js")



connectdb();



app.listen (3000,()=>{
  console.log("The server is working on port 3000")
}) 

