const { parseDef } = require("zod-to-json-schema")
const interviewModel =require("../models/ai-interview.model")
const {generateinterviewreport} = require("../Services/ai.service")



async function  generateInterviewReportcontroller (req,res){
    const Resumecontent =  await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()                             
    const {selfDescription,Jobdescription} =req.body
    const ReportbyAI = await generateinterviewreport({
        resume: Resumecontent.text,
        selfDescription,
        Jobdescription
    })
    const finalReport = await interviewModel.create({
        user: req.user.id,
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

module.exports ={generateInterviewReportcontroller}