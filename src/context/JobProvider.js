import React, { useState } from 'react';
import { fetchJobOffers } from '../services/jobService';
import JobContext from './JobContext';


function JobProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getJobOffers = async () => {
    const jobOffers = await fetchJobOffers();
    setJobs(jobOffers);
  };

  return (
    <JobContext.Provider value={ { jobs, getJobOffers, searchTerm, setSearchTerm } }>
      {children}
    </JobContext.Provider>
  );
}

export default JobProvider;
