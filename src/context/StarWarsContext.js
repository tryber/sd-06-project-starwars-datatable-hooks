import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext();

export const Provider = ({ children }) => {
  const [filterPlanetByName, setFilterPlanetByName] = useState({ name: '' });
  const [planetsData, setPlanetsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const data = {
    setFilterPlanetByName,
    filterPlanetByName,
    setLoading,
    loading,
    planetsData,
    setPlanetsData,
  };

  return (
    <StarWarsContext.Provider value={ data }>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
