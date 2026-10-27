const { parseDef } = require("zod-to-json-schema")
const interviewModel =require("../models/ai-interview.model")
const {generateinterviewreport} = require("../Services/ai.service")



async function  generateInterviewReportcontroller (req,res){
    const Resumecontent =  await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()                             
    const {selfDescription,Jobdescription} =req.body


}

module.exports ={generateInterviewReportcontroller}