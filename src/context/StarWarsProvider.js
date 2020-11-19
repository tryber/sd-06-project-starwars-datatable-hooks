import React, { useState } from 'react';
import PropTypes from 'prop-types';

import fetchPlanet from '../services/planetServices';

import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');

  const getPlanets = async () => {
    const allPlanets = await fetchPlanet();
    setData(allPlanets);
  };

  return (
    <StarWarsContext.Provider value={ { data, getPlanets, searchText, setSearchText } }>
      {children}
    </StarWarsContext.Provider>
  );
}

// como visto no PR da colega Isabela Rosa <3:
StarWarsProvider.propTypes = { children: PropTypes.arrayOf().isRequired };

export default StarWarsProvider;
