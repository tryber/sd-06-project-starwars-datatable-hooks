import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import requestPlanets from '../services/api';

export default function Provider({ children }) {
  const INITIAL_FILTERS = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  };
  const [data, setData] = useState([]);
  const [filters, setFilter] = useState({ ...INITIAL_FILTERS });

  const starWarsPlanets = async () => {
    const planets = await requestPlanets();
    setData(planets);
  };

  useEffect(() => {
    starWarsPlanets();
  }, []);

  const handleInputChange = (name) => {
    setFilter({ ...filters, filterByName: { name } });
  };

  const newFilters = (filter) => {
    setFilter({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, filter] });
  };

  const contextValue = {
    data,
    filters,
    handleInputChange,
    newFilters,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
