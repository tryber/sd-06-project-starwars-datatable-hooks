import React, { useState } from 'react';
import PropTypes from 'prop-types';

import fetchPlanet from '../services/planetServices';

import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  const getPlanets = async () => {
    const allPlanets = await fetchPlanet();
    setData(allPlanets);
  };

  return (
    <StarWarsContext.Provider value={ { data, getPlanets } }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = { children: PropTypes.arrayOf().isRequired };

export default StarWarsProvider;
