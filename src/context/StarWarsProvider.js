import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchApiStar from '../services/StarWarsApi';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const getApiStar = async () => {
    const starWarsOffers = await fetchApiStar();
    setPlanets(starWarsOffers.results);
  };

  return (
    <StarWarsContext.Provider
      value={ {
        planets,
        getApiStar,
        searchTerm,
        setSearchTerm,
      } }
    >
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = PropTypes.arrayOf(PropTypes.string).isRequired;

export default StarWarsProvider; //  disponibilizo de forma global
