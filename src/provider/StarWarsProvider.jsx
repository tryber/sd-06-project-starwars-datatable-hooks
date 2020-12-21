import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';
import APIFetcher from '../services/fetch';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  async function getAPI() {
    const response = await APIFetcher();
    setPlanets(response);
  }
  const [filters, setFilters] = useState({ filterByName:{ name:'' } });

  return (
    <StarWarsContext.Provider
      value={ {
        planets,
        getAPI,
        filters,
        setFilters,
      } }
    >
      {children}
    </StarWarsContext.Provider>

  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default StarWarsProvider;
