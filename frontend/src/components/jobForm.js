"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation'


export default function JobForm({ editingJob, setEditMode, updateEditingJob }) {
  const router = useRouter();
  const [job, setJob] = useState(editingJob ? editingJob: {
    title: '',
    description: '',
    company: '',
    location: '',
    salary: '',
    type: 'full-time',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  function handleOnchange(event) {
    setJob({
      ...job,
      [event.target.name]: event.target.value,
    });
  }

  const createJob = async () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(job),
    })
    .then(response => {
        if (!response.ok) {
        throw Error(response.statusText);
        }

        return response.json();
    })
    .then(data => {
        alert('Job posted successfully'),
        router.push(`${process.env.NEXT_PUBLIC_API_URL}/jobs/${data.data._id}`)
    })
    .catch(err => console.error(err))
    .finally(setSubmitting(false));
  }

  const updateJob = async () => {
    const changedFields = {};

    for (const key in job) {
        if (job[key] !== editingJob[key]) {
            changedFields[key] = job[key];
        }
    }
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs/${editingJob._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(changedFields),
    })
    .then(response => {
        if (!response.ok) {
        throw Error(response.statusText);
        }

        return response.json();
    })
    .then(data => {
        alert('Job edited successfully'),
        // Update the job in the parent component
        updateEditingJob(data.data);
        // Switch off edit mode
        setEditMode(false);
    })
    .catch(err => console.error(err))
    .finally(setSubmitting(false));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    if (editingJob) {
      updateJob();
    } else {
      createJob();
    }
  };


  return (
      <div>
        <form onSubmit={handleSubmit} className="py-5 mb-5">
            <label className="input-label"> Job Title: </label>
            <input className="input" type="text" name="title" value={job.title}  onChange={(e) => handleOnchange(e)} required />
            
            <label className="input-label">Company:</label>
            <input className="input" type="text" name="company" value={job.company} onChange={(e) => handleOnchange(e)} required />

            <label className="input-label">Location:</label>
            <input className="input" type="text" name="location" value={job.location} onChange={(e) => handleOnchange(e)} required />
            
            <label className="input-label">Salary:</label>
            <input className="input" type="text" name="salary" value={job.salary} onChange={(e) => handleOnchange(e)} required />

            <label>Type:</label>
            <select className="input" value={job.type} onChange={(e) => handleOnchange(e)} required>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
            </select>
            
            <label className="input-label">Description:</label>
            <textarea className="input" rows="7" name="description" value={job.description} onChange={(e) => handleOnchange(e)}></textarea>
            
            <button className="btn mt-5 float-right" type="submit" disabled={submitting}>{editingJob ? 'Update Job' : 'Post Job'}</button>
        </form>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      </div>
  );
}
