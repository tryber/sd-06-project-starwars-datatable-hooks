import React, { useState } from 'react';
import PropTypes from 'prop-types';

import fetchPlanetsAPI from '../services/StarWarsService';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const FILTER_OBJECT = {
    filterByName: { name: '' },
  };

  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(FILTER_OBJECT);

  const getPlanetList = async () => {
    const planetsAvailable = await fetchPlanetsAPI();
    setData(planetsAvailable);
  };

  const setFilterByName = (inputText) => {
    setFilters({
      ...filters,
      filterByName: { name: inputText },
    });
  };

  const context = {
    data,
    getPlanetList,
    filters,
    setFilterByName,
  };

  return (
    <StarWarsContext.Provider value={ { context } }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default StarWarsProvider;

StarWarsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
