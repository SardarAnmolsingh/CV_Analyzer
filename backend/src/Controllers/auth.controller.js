const usermodel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const tokenblacklistmodel = require("../models/blacklist.model")

async function registeruser(req, res) {

    const { username, email, password } = req.body

    if (!username || !password || !email) {
        return res.status(400).json({
            message: "Please provide the username email passoword all"
        })
    }
    const alreadyexists = await usermodel.findOne({
        $or: [{ username }, { email }]
    })

    if (alreadyexists) {
        return res.status(400).json({
            message: "the user already exists"
        })
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await usermodel.create({
        username,
        password: hash,
        email
    })
    const token = jwt.sign({
        id: user._id, username: user.username
    }, process.env.jwt_secret, { expiresIn: "1d" })

    res.cookie("token", token)
    res.status(201).json({
        message: "the user has successfully registered",
        user: {
            id: user.username,
            username: user.username,
            email: user.email,
            password: user.password
        }
    })

}
async function loginuser(req, res) {
    const { email, username, password } = req.body

    if ((!email && !username) || !password) {
        return res.status(400).json({
            messsage: "provide either email or username and a password "
        })
    }
    const user = await usermodel.findOne({
        $or: [{ username }, { email }]
    })
    console.log (user)

    if (!user) {
        return res.status(401).json({
            message: "the user doesn't exist"
        })
    }

    const validpassword =  await bcrypt.compare(password, user.password)
    console.log(validpassword)
    if (!validpassword) {
        return res.status(400).json({
            message: "invalid email or password"
        })
    }
    const token = jwt.sign({
        id: user._id, username: user.username
    }, process.env.jwt_secret, { expiresIn: "1d" })


    res.cookie("token", token)
    res.status(200).json({
        message: "login successful",
        user: {

            id: user._id,
            username: user.username,
            emai: user.email

        }
    })
}
async function logout(req,res){
const token = req.cookies.token

if(token){
    await tokenblacklistmodel.create({token})
}

res.clearCookie("token")

res.status(200).json({
    message:"Logged out successfully "
})

}
async function getme(req,res){
  const user = await usermodel.findOne(req.user._id)

  res.status(200).jsomn({
    message:"the user details fetched successfully",

    user:{
        id: user._id,
        username: user.username,
        email: user.email
    }
  })
}


module.exports = { registeruser, loginuser ,logout , getme }