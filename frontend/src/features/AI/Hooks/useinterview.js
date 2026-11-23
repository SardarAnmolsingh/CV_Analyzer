import { generateReport,getInterviewbyId,getAllinterviewReports } from "../Services/interview.api"
import { useContext, useEffect } from "react"
import { InterviewContext } from "../interview.context"
import { useParams } from "react-router"


export const useInterview = () => {

    const context = useContext(InterviewContext)
    const { interviewId } = useParams()

    if (!context) {
        throw new Error("useInterview must be used within an InterviewProvider")
    }

    const { loading, setLoading, report, setReport, reports, setReports } = context

    const GenerateReport = async ({ Jobdescription, selfDescription, resumefile }) => {
        setLoading(true)
        let response = null
        try {
            response = await generateReport({ Jobdescription, selfDescription, resumefile })
            console.log(response.finalReport)
            setReport(response.finalReport)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

        return response.finalReport
    }

    const getReportById = async (interviewId) => {
        setLoading(true)
        let response = null
        try {
            response = await getInterviewbyId(interviewId)
             console.log(response)
            setReport(response.report)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
        return response.report
    }

    const getReports = async () => {
        setLoading(true)
        let response = null
        try {
            response = await getAllinterviewReports()
            setReports(response.interviewReports)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

        return response.interviewReports
    }

    // useEffect(() => {
    //     if (interviewId) {
    //         getReportById(interviewId)
    //     } else {
    //         getReports()
    //     }
    // }, [ interviewId ])

    return { loading, report, reports, GenerateReport, getReportById, getReports, }
};
