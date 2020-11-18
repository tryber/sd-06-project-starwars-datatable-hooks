import React, { useState } from 'react';
import PropTypes from 'prop-types';

import fetchPlanetsAPI from '../services/StarWarsService'
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState('');

  const getPlanetList = async () => {
    const planetsAvailable = await fetchPlanetsAPI();
    setData(planetsAvailable);
  };

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        getPlanetList,
        filters,
        setFilters,
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

export default StarWarsProvider;

StarWarsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
