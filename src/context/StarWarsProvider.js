import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchApiStar from '../services/StarWarsApi';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const getApiStar = async () => {
    const starWarsOffers = await fetchApiStar();
    setPlanets(starWarsOffers.results);
  };
  const context = {
    planets,
    getApiStar,
    searchTerm,
    setSearchTerm,
    setFilterByNumericValues,
    filterByNumericValues,
  };

  return (
    <StarWarsContext.Provider
      value={ context }
    >
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = PropTypes.arrayOf(PropTypes.string).isRequired;

export default StarWarsProvider; //  disponibilizo de forma global
