// const { parseDef } = require("zod-to-json-schema")
const  interviewModel = require("../models/ai-interview.model")
const {GenerateInterviewReport} = require("../Services/ai.service")
const pdfParse = require("pdf-parse")



async function  generateInterviewReportcontroller (req,res){
 const Resumecontent = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()
 
 
    const {selfDescription,Jobdescription} =req.body

   
    const ReportbyAI = await GenerateInterviewReport({
       CV:Resumecontent.text,
        selfDescription,
        Jobdescription 
    })

    
    const finalReport = await interviewModel.create({
        
        resume: Resumecontent.text,
        selfDescription,
        Jobdescription,
        ...ReportbyAI
    }) 
    
    
    res.status(201).json({
        message: "The interview report is generated successfully",
        finalReport
    })

}

async function generateInterviewReportbyIdcontroller(req,res){
 const {interviewId} = req.params
 const report = await interviewModel.findById(interviewId)
 console.log(report)
 if(!report){
    return res.status(404).json({
        message:"The interview  report is not found"
    })
 }

 res.status(200).json({
    message:"The interview report is fetched successfully",
    report
 })
}

async function getALLInterviewReportscontroller(res,req){
    const reports = (await interviewModel.find({user: req.user.id})).sort({createdAt: -1}).select("-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan")

    res.status(200).json({
        messge:"The Interview reports fetched successfully",
        reports
    })

}
module.exports ={generateInterviewReportcontroller,generateInterviewReportbyIdcontroller,getALLInterviewReportscontroller}