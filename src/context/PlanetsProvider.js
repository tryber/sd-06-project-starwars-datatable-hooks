import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import apiRequest from '../services';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  const getPlanets = async () => {
    const apiReturn = await apiRequest();
    setData(apiReturn);
  };

  return (
    <PlanetsContext.Provider value={ { data, getPlanets } }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default PlanetsProvider;
