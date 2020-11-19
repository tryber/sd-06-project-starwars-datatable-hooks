import React, { useState } from 'react';
import PropTypes from 'prop-types';
import starWarsContext from './starWarsContext';

import fetchStarWarsPlanets from '../services/fetchApi';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  // const [filteredPlanet, setFilteredPlanet] = useState([]);
  const [filters, setFilters] = useState({
    column: '',
    number: '',
    compare: '',
  });

  const dynamicFilter = () => {
    if (filters.compare === 'igual a') {
      const filtered = data.filter((planet) => (
        planet[filters.column] === filters.number));
      return setData(filtered);
    } if (filters.compare === 'maior que') {
      const filtered = data.filter((planet) => (
        planet[filters.column] > parseInt(filters.number, 10)));
      return setData(filtered);
    } if (filters.compare === 'menor que') {
      const filtered = data.filter((planet) => (
        planet[filters.column] < parseInt(filters.number, 10)));
      return setData(filtered);
    }
  };

  const getStarWarsPlanets = async () => {
    const resultsFromApi = await fetchStarWarsPlanets();
    setData(resultsFromApi);
  };

  return (
    <starWarsContext.Provider
      value={ { data,
        getStarWarsPlanets,
        searchText,
        setSearchText,
        filters,
        setFilters,
        dynamicFilter } }
    >
      { children }
    </starWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

export default StarWarsProvider;
