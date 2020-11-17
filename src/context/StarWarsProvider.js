import React, { useState } from 'react';
import propTypes from 'prop-types';
import fetchStarWars from '../services/API';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  const getPlanets = async () => {
    const planets = await fetchStarWars();
    setData(planets);
  };

  return (
    <StarWarsContext.Provider value={ { data, getPlanets } }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: propTypes.func.isRequired,
};

export default StarWarsProvider;
