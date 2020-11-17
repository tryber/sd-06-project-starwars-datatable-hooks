import React from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import useFetch from '../services/useFetch';

const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

function StarWarsProvider({ children }) {
  const { data, loading, error } = useFetch(url);
  const contextState = {
    data,
    loading,
    error,
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
