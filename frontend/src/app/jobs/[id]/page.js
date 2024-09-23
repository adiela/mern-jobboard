"use client"
import { useState, useEffect } from 'react';
import JobForm from '@/components/jobForm';
import JobPost from '@/components/JobPost';
import { useRouter } from 'next/navigation'


export default function JobPage({ params }) {
    const router = useRouter();
    const [job, setJob] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        setLoading(true);
        const fetchJob = async () => {
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs/${params.id}`);
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
        setSubmitting(true);
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs/${params.id}`, { method: 'DELETE' });
          if (!response.ok) {
            throw new Error('Failed to delete job');
          }
          await response.json();
          alert('Job deleted successfully');
          router.push('/')
        } catch (err) {
          setError(err.message);
          alert(error)
        } finally {
          setSubmitting(false);
        }
      };

      if (loading) return <p>Loading job...</p>;

  return (
      <div>
        {
            editMode ? <JobForm editingJob={job} setEditMode={setEditMode} updateEditingJob={editedJob => {setJob(editedJob);}} /> : <JobPost job={job} />
        }
        <button className="btn my-3 block" onClick={() => setEditMode(!editMode)} disabled={submitting}>{ editMode ? "Switch off Edit Mode" : "Edit Job Post"} </button>
        <button className="btn-red my-3 block" onClick={deleteJob} disabled={submitting}>Delete Job Post</button>
      </div>
  );
}
