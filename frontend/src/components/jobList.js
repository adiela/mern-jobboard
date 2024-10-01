"use client";
import React, { useEffect, useState } from 'react';
import Loader from '@/components/loader';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs`);
            if (!response.ok) {
              throw new Error('Failed to fetch jobs');
            }
            const data = await response.json();
            setJobs(data.data);
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
    
    fetchJobs();
      }, []);

    if (loading) return <Loader />;
    if (error) return <p>Error loading jobs posts</p>;

    return (
        <ul>
            {jobs.map((job) => (
                <li key={job._id} className="job-item border-b-2 mb-5 py-5 flex flex-col">
                    <div className="flex justify-between">
                        <h2 className="font-bold text-xl">{job.title}</h2>
                        <span>{job.type}</span>
                    </div>
                    
                    <div className="flex justify-between text-sm text-slate-600">
                        <p><strong>Company:</strong> {job.company}</p>
                        <p><strong>Location:</strong> {job.location}</p>
                    </div>
                    <div className="flex justify-between text-sm text-slate-600 items-end mt-3">
                        <p className="text-sm">Date posted: {job.createdAt}</p>
                        <a href={`/jobs/${job._id}`} className="btn text-sm">View Job Details</a>
                    </div>
                    
                </li>
            ))}
        </ul>
    );
};

export default JobList;