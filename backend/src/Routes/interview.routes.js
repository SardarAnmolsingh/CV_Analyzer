const express = require("express")
const authmiddleware =require("../middleware/auth.middleware")
const interviewcontroller = require("../Controllers/interview.controller")
const upload = require("../middleware/file.imiddleware")



const interviewroute = express.Router()



interviewroute.post("/",upload.single("resume"),interviewcontroller.generateInterviewReportcontroller)

interviewroute.post("/report/:interviewId",authmiddleware.authuser,interviewcontroller.generateInterviewReportbyIdcontroller)

interviewroute.post("/",authmiddleware.authuser,interviewcontroller.generateInterviewReportbyIdcontroller)

module.exports = interviewroute