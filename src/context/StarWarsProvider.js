import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import { fetchPlanetsAPI } from '../service/StarWarsService';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterPlanet, setFilterPlanet] = useState('');
  const [filterNumericValues, setFilterNumericValues] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {},
    filterByNumericValues: [
      { column: '',
        comparison: '',
        value: '' },
    ],
  });
  const getPlanets = async () => {
    const data = await fetchPlanetsAPI();
    setPlanets(data);
  };

  // useEffect, com o segundo param [], funciona como componentDidMount
  useEffect(() => {
    getPlanets();
  }, []);
  const contextValue = {
    planets,
    filterPlanet,
    setFilterPlanet,
    filterNumericValues,
    setFilterNumericValues,
    filters,
    setFilters,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}
StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
