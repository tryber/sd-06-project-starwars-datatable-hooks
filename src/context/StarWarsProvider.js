import React, { useState } from 'react';

import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';
import { getPlanetList } from '../services/StarWarsAPI';

const StarWarsProvider = ({ children }) => {
  const initialObj = { filterByName: { name: '' } };

  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(initialObj);

  const fetchAPI = async () => {
    getPlanetList().then((json) => {
      setData(json.results);
    });
  };

  const setFilterByName = (value) => {
    setFilters({
      ...filters,
      filterByName: { name: value },
    });
  };

  const context = {
    data,
    setData,
    fetchAPI,
    filters,
    inputName: filters.filterByName.name,
    setFilters,
    setFilterByName,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default StarWarsProvider;
