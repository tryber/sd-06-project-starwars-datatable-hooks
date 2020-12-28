import React, { useState, useEffect } from 'react';
import SWContext from './SWContext';
import fetchPlanetsAPI from '../services/sWservices';

const SWProvider = ( { children } ) => {

  const [jobs, setJobs] = useState([]);

  const getPlanetSW = async () => {
    const planetSW = await fetchPlanetsAPI();
    setJobs(planetSW)
  };

  useEffect(() => {
    getPlanetSW();
  },[]);

  return (
    <SWContext.Provider value={ { jobs } }>
      {children}
    </SWContext.Provider>
  );
}

export default SWProvider;
