import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchStarWarsData from '../services/starWarsAPI';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  const getData = async () => {
    const results = await fetchStarWarsData();
    setData(results);
  };

  const setFilterByName = (searchTerm) => {
    setFilters({
      ...filters,
      filterByName: { name: searchTerm },
    });
  };

  const setFilterByNumericValues = (values) => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, values],
    });
  };

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        getData,
        filters,
        setFilterByName,
        setFilterByNumericValues,
      } }
    >
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.shape.isRequired,
};

export default StarWarsProvider;
