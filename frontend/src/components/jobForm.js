"use client"
import { useState } from 'react';

export default function JobForm() {
  const [job, setJob] = useState({
    title: '',
    description: '',
    company: '',
    location: '',
    salary: '',
    type: 'full-time',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleOnchange(event) {
    setJob({
      ...job,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:4000/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(job),
      });

      if (!response.ok) {
        throw new Error('Failed to create job');
      }
      
      // Reset form fields
        setJob({
            title: '',
            description: '',
            company: '',
            location: '',
            salary: '',
            type: 'full-time',
        });

        alert('Job posted successfully');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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
            
            <button className="btn mt-5 float-right" type="submit" disabled={loading}>{loading ? 'Posting...' : 'Post Job'}</button>
        </form>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      </div>
  );
}
