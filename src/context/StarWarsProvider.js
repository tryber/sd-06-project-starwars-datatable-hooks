import React, { useState } from 'react';

import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';
import { getPlanetList } from '../services/StarWarsAPI';

const StarWarsProvider = ({ children }) => {
  const initialObj = {
    filterByName: { name: '' },
    filterByNumericValues: [{ column: '', comparison: '', value: '' }],
  };

  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(initialObj);
  const [willFilter, setWillFilter] = useState(false);
  const [firstCall, setFirstCall] = useState(false);

  const fetchAPI = async () => {
    getPlanetList().then((json) => {
      setData(json.results);
    });
  };

  const handleToggleFilter = () => {
    setWillFilter(true);
  };

  const setFilterByName = (value) => {
    setFilters({
      ...filters,
      filterByName: { name: value },
    });
  };

  const setFilterByNumericValues = (column, comparison, value) => {
    if (firstCall === false) {
      setFilters({
        ...filters,
        filterByNumericValues: [{
          column,
          comparison,
          value,
        }],
      });
      handleToggleFilter();
      setFirstCall(true);
    } else {
      setFilters({
        ...filters,
        filterByNumericValues: filters.filterByNumericValues.concat({
          column,
          comparison,
          value,
        }),
      });
      handleToggleFilter();
    }
  };

  const context = {
    data,
    setData,
    fetchAPI,
    filters,
    inputName: filters.filterByName.name,
    setFilters,
    setFilterByName,
    setFilterByNumericValues,
    column: filters.filterByNumericValues.map((e) => e.column),
    comparison: filters.filterByNumericValues.map((e) => e.comparison),
    value: filters.filterByNumericValues.map((e) => e.value),
    willFilter,
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
