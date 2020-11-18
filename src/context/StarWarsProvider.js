import React, { useState } from 'react';
import PropTypes from 'prop-types';
import starWarsContext from './starWarsContext';

import fetchStarWarsPlanets from '../services/fetchApi';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');

  const getStarWarsPlanets = async () => {
    const resultsFromApi = await fetchStarWarsPlanets();
    setData(resultsFromApi);
  };

  return (
    <starWarsContext.Provider
      value={ { data, getStarWarsPlanets, searchText, setSearchText } }
    >
      { children }
    </starWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

export default StarWarsProvider;
