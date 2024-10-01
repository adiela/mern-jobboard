export default function JobPost({ job }) {
  return (
      <div>
        <div className="data-label"> Job Title: </div>
        <div className="data-val text-2xl font-bold">{job.title}</div>
        
        <div className="data-label"> Company: </div>
        <div className="data-val">{job.company}</div>
        
        <div className="data-label"> Location: </div>
        <div className="data-val">{job.location}</div>
        
        <div className="data-label"> Salary: </div>
        <div className="data-val">{job.salary || "-"}</div>
        
        <div className="data-label"> Type: </div>
        <div className="data-val">{job.type}</div>
        
        <div className="data-label"> Description: </div>
        <div className="data-val">{job.description}</div>
            
    </div>
  );
}
