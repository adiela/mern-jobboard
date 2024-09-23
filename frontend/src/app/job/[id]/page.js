"use client"
import { useState, useEffect } from 'react';
import JobForm from './../../../components/jobForm';
import JobPost from './../../../components/JobPost';
import { redirect } from 'next/navigation'


export default function JobPage({ params }) {
    const [job, setJob] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchJob = async () => {
          try {
            const response = await fetch(`http://localhost:4000/api/jobs/${params.id}`);
            if (!response.ok) {
              throw new Error('Failed to fetch jobs');
            }
            const data = await response.json();
            setJob(data.data);
          } catch (err) {
            setError(err.message);
            alert(error)
          } finally {
            setLoading(false);
          }
        };
    
    fetchJob();
      }, []);

      const deleteJob = async () => {
        setLoading(true);
        try {
          const response = await fetch(`http://localhost:4000/api/jobs/${params.id}`, { method: 'DELETE' });
          if (!response.ok) {
            throw new Error('Failed to delete job');
          }
          await response.json();
        } catch (err) {
          setError(err.message);
          alert(error)
        } finally {
          setLoading(false);
          redirect('/')
        }
      };

  return (
      <div>
        {
            editMode ? <JobForm job={job} /> : <JobPost job={job} />
        }
        <button className="btn my-3 block" onClick={() => setEditMode(!editMode)} disabled={loading}>{ editMode ? "Switch off Edit Mode" : "Edit Job Post"} </button>
        <button className="btn-red my-3 block" onClick={deleteJob} disabled={loading}>Delete Job Post</button>
      </div>
  );
}
