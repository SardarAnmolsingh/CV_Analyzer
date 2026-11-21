const express = require("express")
const authmiddleware =require("../middleware/auth.middleware")
const interviewcontroller = require("../Controllers/interview.controller")
const upload = require("../middleware/file.imiddleware")



const interviewroute = express.Router()



interviewroute.post("/",upload.single("resume"),interviewcontroller.generateInterviewReportcontroller)

interviewroute.get("/report/:interviewId",authmiddleware.authuser,interviewcontroller.generateInterviewReportbyIdcontroller)

interviewroute.get("/",authmiddleware.authuser,interviewcontroller.getALLInterviewReportscontroller)

module.exports = interviewroute