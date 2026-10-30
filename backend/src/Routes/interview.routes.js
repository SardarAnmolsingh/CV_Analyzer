const express =require("express")
const authmiddleware =require("../middleware/auth.middleware")
const interviewcontroller = require("../Controllers/interview.controller")
const upload = require("../middleware/file.imiddleware")



const interviewroute = express.Router()



interviewroute.post("/",upload.single("Vikran_Pal_Singh_Resume"),interviewcontroller.generateInterviewReportcontroller)

module.exports = interviewroute