const mongoose = require("mongoose")


async function connectdb(){
try{
    
   await mongoose.connect(process.env.mongo_url)
   console.log ("the database has successfully connected ")
}
catch(e){
    console.log(e)
}
}

module.exports = connectdb;