import React, { useState } from 'react';
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

StarWarsProvider.propTypes =
PropTypes.arrayOf(PropTypes.string).isRequired;

export default StarWarsProvider;
