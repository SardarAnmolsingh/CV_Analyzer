const express =require("express")
const authmiddleware =require("../middleware/auth.middleware")
const interviewcontroller = require("../Controllers/interview.controller")




const interviewroute = express.Router()



interviewroute.post("/",authmiddleware.authuser,interviewcontroller.generateInterviewReportcontroller)

module.exports = interviewroute