import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import StarWarsAPI from '../services/StarWarsAPI';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const FILTER_INITIAL_STATE = {
    filterByName: { name: '' },
    filterByNumericValues: [],
  };
  const [data, setData] = useState();
  const [filters, setFilters] = useState(FILTER_INITIAL_STATE);

  const getPlanets = async () => {
    const planets = await StarWarsAPI();
    setData(planets);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const handleFilterByName = (name) => {
    setFilters({ ...filters, filterByName: { name },
    });
  };

  const addFilterByNumericValues = (value) => {
    setFilters({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues.concat(value),
    });
  };

  const removeFilterByNumericValues = (value) => {
    setFilters({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues
        .filter((filter) => filter.column !== value),
    });
  };

  const contextValue = {
    data,
    filters,
    handleFilterByName,
    addFilterByNumericValues,
    removeFilterByNumericValues,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
