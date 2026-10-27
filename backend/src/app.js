const express = require("express")
const authroute= require("../src/Routes/auth.route")
const interviewroute = require("../src/Routes/interview.routes")
const cookieparser = require("cookie-parser")
const cors = require("cors")


const app = express()

app.use(express.json())
app.use(cookieparser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use("/api/auth",authroute)
app.use("/api/interview",interviewroute)



module.exports = app;