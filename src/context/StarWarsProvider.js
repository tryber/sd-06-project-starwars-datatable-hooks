import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchStarWarsPlanets from '../services/starWarsService';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  const getPlanetsData = async () => {
    const planets = await fetchStarWarsPlanets();
    setData(planets);
  };
  return (
    <StarWarsContext.Provider value={ { data, getPlanetsData } }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
