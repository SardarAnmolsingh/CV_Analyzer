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

    console.log(
        ReportbyAI
    )
    const finalReport = await interviewModel.create({
        
        resume: Resumecontent.text,
        selfDescription,
        Jobdescription,
        ...ReportbyAI
    }) 
    console.log(finalReport)
    
    res.status(201).json({
        message: "The interview report is generated successfully",
        finalReport
    })

}

module.exports ={generateInterviewReportcontroller}