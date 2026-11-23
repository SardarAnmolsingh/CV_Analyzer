import React, { useState , useRef } from 'react';
import { useInterview } from '../Hooks/useinterview';
import { useNavigate } from 'react-router';
import Loading from './Loading';

export default function ProfileForm() {

  const {loading,GenerateReport,reports} = useInterview()
  const [Jobdescription, setJobDescription] = useState('')
  const [selfDescription, setSelfDescription] = useState('')


  const navigate = useNavigate()

  const resumeInputRef=useRef()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resumefile = resumeInputRef.current.files[ 0 ]
    console.log({ Jobdescription, selfDescription, resumefile });
    const data = await GenerateReport({ Jobdescription, selfDescription, resumefile })
    console.log(data)
    navigate(`/interview/${data._id}`)
    
  };

  if(loading){
    return(
     <Loading  fullScreen size="lg" label="loading your data chill dude"/>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-neutral-900 p-6 rounded-xl border border-neutral-800 space-y-6">
        <h2 className="text-xl font-semibold text-white">Profile Setup</h2>

        <div>
          <label className="block text-sm text-neutral-300 mb-2">Job Description</label>
          <textarea
            rows="4"
            value={Jobdescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="w-full bg-neutral-800 text-white rounded-md p-3 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-red-600 resize-y"
            placeholder="Enter job description..."
          />
        </div>

        <div>
          <label className="block text-sm text-neutral-300 mb-2">Self Description</label>
          <textarea
            rows="4"
            value={selfDescription}
            onChange={(e) => setSelfDescription(e.target.value)}
            className="w-full bg-neutral-800 text-white rounded-md p-3 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-red-600 resize-y"
            placeholder="Enter self description..."
          />
        </div>

        <div>
          <label className="block text-sm text-neutral-300 mb-2">Resume Upload</label>
          <input
            type="file"
            ref={resumeInputRef}
            accept=".pdf,.doc,.docx"
            className="w-full text-sm text-neutral-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-red-600 file:text-white hover:file:bg-red-700 cursor-pointer"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-md transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}