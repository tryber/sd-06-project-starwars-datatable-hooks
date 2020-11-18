import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchStarWarsData from '../services/starWarsAPI';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getData = async () => {
    const results = await fetchStarWarsData();
    setData(results);
  };

  return (
    <StarWarsContext.Provider value={ { data, getData, searchTerm, setSearchTerm } }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.shape.isRequired,
};

export default StarWarsProvider;
