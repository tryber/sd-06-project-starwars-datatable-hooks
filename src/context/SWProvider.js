import React, { useState } from 'react';
import SWContext from './SWContext';
import fetchSWPlanets from './fetchSWPlanets';

const SWProvider = ( { children } ) => {

  const [jobs, setJobs] = useState([]);

  const getPlanetSW = async () => {
    const planetSW = await fetchSWPlanets();
    setJobs(planetSW)
  };

  return (
    <SWContext.Provider value={ { jobs } }>
      {children}
    </SWContext.Provider>
  );
}

export default SWProvider;
