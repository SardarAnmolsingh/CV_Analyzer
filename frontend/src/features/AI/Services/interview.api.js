import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})/**
 *  @Description Service to generate the report based on job description,self description and resume 
 */

export const generateReport = async ({ jobDescription, selfDescription, resumefile }) => {

    const formData = new FormData()
    // console.log(resumefile)
    formData.append("jobDescription", jobDescription)
    formData.append("selfDescription", selfDescription)
    formData.append("resume", resumefile)

    const response = await api.post("/api/interview/", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })

    return response.data

}
/**
 *  @Description Service to get interview by interviewId
 */
export const getInterviewbyId = async (interviewId)=>{
    const response = await api.get(`/api/interview/report/${interviewId}`)


    return response.data
}
/**
 * @Description Service to get all the interview reports of a logged in user
 */

export const getAllinterviewReports= async()=>{
    const response = await api.get(`/api/interview/`)

    return response.data

}


