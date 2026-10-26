const jwt = require("jsonwebtoken")
const tokenblacklist = require("../models/blacklist.model")


async function authuser(req, res, next) {
    const token = await req.cookies.token


    if (!token) {
        return res.status(401).json({
            message: "Provide the valid token"
        })
    }

    const blacklist = await tokenblacklist.findOne({ token })

    if (blacklist) {
        return res.status(401).json({
            message: "The invalid token is provided"
        })
    }

    try {
        const decoded = await jwt.verify(token, process.env.jwt_secret)
        req.user = decoded
        next()
    } catch (e) {
        return res.status(401).json({
            message: "The invalid token"
        })
    }

}

module.exports = { authuser }