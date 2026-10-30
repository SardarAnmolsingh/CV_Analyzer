import React, { useState } from 'react';

export default function ProfileForm() {
  const [jobDescription, setJobDescription] = useState('');
  const [selfDescription, setSelfDescription] = useState('');
  const [resumeFile, setResumeFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ jobDescription, selfDescription, resumeFile });
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-neutral-900 p-6 rounded-xl border border-neutral-800 space-y-6">
        <h2 className="text-xl font-semibold text-white">Profile Setup</h2>

        <div>
          <label className="block text-sm text-neutral-300 mb-2">Job Description</label>
          <textarea
            rows="4"
            value={jobDescription}
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
            accept=".pdf,.doc,.docx"
            onChange={(e) => setResumeFile(e.target.files ? e.target.files[0] : null)}
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