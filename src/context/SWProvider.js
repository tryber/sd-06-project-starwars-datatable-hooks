import React, { useState, useEffect } from 'react';
import SWContext from './SWContext';
import fetchPlanetsAPI from '../services/sWservices';

const SWProvider = ({ children }) => {
  const [planets, setplanets] = useState([]);

  const getPlanetSW = async () => {
    const planetSW = await fetchPlanetsAPI();
    setplanets(planetSW);
  };

  useEffect(() => {
    getPlanetSW();
  }, []);

  return <SWContext.Provider value={ { planets } }>{children}</SWContext.Provider>;
};

export default SWProvider;

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
