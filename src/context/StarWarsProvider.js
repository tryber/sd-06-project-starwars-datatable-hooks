import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import planetsAPI from '../services/planetsAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchTermValue, setSearchTermValue] = useState('');
  const [filterColumSelected, setFilterColumSelected] = useState('');
  const [filterComparisonSelected, setFilterComparisonSelected] = useState('');
  const [filterValueSelected, setFilterValueSelected] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const getPlanetsList = async () => {
    const planetsList = await planetsAPI();
    setData(planetsList);
  };

  const currentTermFilterHandler = (term) => {
    setSearchTermValue(term);
    setFilters({
      ...filters,
      filterByName: {
        name: term,
      },
    });
  };

  const currentNumericFilterHandler = (column, comparison, value) => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    });
  };

  const providerValue = {
    data,
    filterColumSelected,
    filterComparisonSelected,
    filterValueSelected,
    filters,
    isLoading,
    searchTermValue,
    currentTermFilterHandler,
    currentNumericFilterHandler,
    getPlanetsList,
    setFilterColumSelected,
    setFilterComparisonSelected,
    setFilterValueSelected,
    setIsLoading,
  };

  return (
    <StarWarsContext.Provider
      value={ providerValue }
    >
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = PropTypes.arrayOf(PropTypes.string).isRequired;

export default StarWarsProvider;
