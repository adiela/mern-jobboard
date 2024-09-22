import React from 'react';

const JobList = ({ jobs }) => {
    return (
        <ul>
            {jobs.map((job, index) => (
                <li key={index} className="job-item border-b-2 mb-5 py-5 flex flex-col">
                    <div className="flex justify-between">
                        <h2 className="font-bold text-xl">{job.title}</h2>
                        <span>{job.type}</span>
                    </div>
                    
                    <div className="flex justify-between text-sm text-slate-600">
                        <p><strong>Company:</strong> {job.company}</p>
                        <p><strong>Location:</strong> {job.location}</p>
                    </div>
                    <div className="flex justify-between text-sm text-slate-600 items-end mt-3">
                        <p className="text-sm">Date posted: {job.date}</p>
                        <a href="#" className="btn text-sm">View Job Details</a>
                    </div>
                    
                </li>
            ))}
        </ul>
    );
};

export default JobList;