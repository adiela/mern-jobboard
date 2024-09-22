import JobList from '../components/jobList';

export default function Home() {
  const jobs = [
    {
        title: 'Frontend Developer',
        description: 'Develop and maintain web applications.',
        company: 'Tech Corp',
        date: '2023-10-01',
        location: "Kenya",
        type: 'full-time'
    },
    {
        title: 'Backend Developer',
        description: 'Build and manage server-side applications.',
        company: 'Innovate Ltd',
        date: '2023-09-15',
        location: "Nigeria",
        type: 'part-time'
    },
    {
        title: 'Full Stack Developer',
        description: 'Work on both frontend and backend of web applications.',
        company: 'Web Solutions',
        date: '2023-08-20',
        location: "South Africa",
        type: 'contract'
    }
];
  return (
      <JobList jobs={jobs} />
  );
}
