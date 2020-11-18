import React, { useState } from 'react';
import PropTypes from 'prop-types';
import starWarsContext from './starWarsContext';

import fetchStarWarsPlanets from '../services/fetchApi';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  const getStarWarsPlanets = async () => {
    const resultsFromApi = await fetchStarWarsPlanets();
    setData(resultsFromApi);
  };

  getStarWarsPlanets();

  return (
    <starWarsContext.Provider value={ { data } }>
      { children }
    </starWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarWarsProvider;
