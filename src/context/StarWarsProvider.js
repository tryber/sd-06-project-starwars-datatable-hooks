import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import useFetch from '../services/useFetch';

const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

function StarWarsProvider({ children }) {
  const { data, loading, error } = useFetch(url);
  const [filterByName, setFilterByName] = useState('');
  const [filterNumbers, setFilterNumbers] = useState({
    filterByNumericValues: [{
      column: 'population',
      comparison: '',
      value: 0,
    }],
  });

  const filterByNumber = (column, comparison, value) => {
    setFilterNumbers({
      filterByNumericValues: [
        ...filterNumbers.filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    });
  };

  const contextState = {
    data,
    loading,
    error,
    filterByName,
    setFilterByName,
    filterNumbers,
    filterByNumber,
  };

  return (
    <StarWarsContext.Provider value={ contextState }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
