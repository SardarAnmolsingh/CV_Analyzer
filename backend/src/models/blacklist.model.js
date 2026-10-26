const mongoose = require("mongoose")


const  blacklistschema = mongoose.Schema({
    token:{
        type: String,
        required: [true,"the token is rquired to be added in the blacklist"],
    }
},{
    timestamps: true,
})

const blacklistmodel = mongoose.model("blacklisttokens",blacklistschema)

module.exports = blacklistmodel

