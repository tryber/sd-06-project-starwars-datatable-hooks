import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext();
export const Provider = ({ children }) => {
  const [fetching, setFetching] = useState(false);
  const [planetsData, setPlanetsData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });

  const context = {
    fetching,
    setFetching,
    planetsData,
    setPlanetsData,
    filterByName,
    setFilterByName,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
