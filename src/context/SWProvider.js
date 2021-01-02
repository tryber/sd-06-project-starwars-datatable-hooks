import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';
import fetchPlanetsAPI from '../services/sWservices';

const SWProvider = ({ children }) => {
  const [planets, setplanets] = useState([]);
  const [filters, setFilters] = useState({
    filters: {
      filterByName: {
        name: ''
      }
    }
  });

  const getPlanetSW = async () => {
    const planetSW = await fetchPlanetsAPI();
    setplanets(planetSW);
  };

  const filteredText = () => {
    
  }

  useEffect(() => {
    getPlanetSW();
  }, []);

  const value = {
    planets,
    filters,
  }

  return <SWContext.Provider value={ value }>{children}</SWContext.Provider>;
};

export default SWProvider;

SWProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
