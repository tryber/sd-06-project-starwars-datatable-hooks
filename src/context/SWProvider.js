import React, { useState } from 'react';
import SWContext from './SWContext';

const SWProvider = () => {

  const [jobs, setJobs] = useState([]);

  return (
    <SWContext.Provider value={ { jobs } }>
      {children}
    </SWContext.Provider>
  );
}

export default SWProvider;
