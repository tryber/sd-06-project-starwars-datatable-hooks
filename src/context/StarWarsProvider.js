import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';
import fetchPlanetsData from '../services/dataServicesAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filteredName, setFilteredName] = useState('');
  const [filteredColumn, setFilteredColumn] = useState('');
  const [filteredNumber, setFilteredNumber] = useState('');

  const contextState = {
    data,
    filteredName,
    setFilteredName,
    filteredColumn,
    setFilteredColumn,
    filteredNumber,
    setFilteredNumber,
  };

  useEffect(() => {
    const getPlanets = async () => {
      const planets = await fetchPlanetsData();
      planets.map((orb) => delete orb.residents);
      setData(planets);
    };
    getPlanets();
  }, []);

  return (
    <StarWarsContext.Provider value={ contextState }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarWarsProvider;
