import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchStarWarsPlanets from '../services/starWarsService';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchPlanet, setsearchPlanet] = useState([]);

  const getPlanetsData = async () => {
    const planets = await fetchStarWarsPlanets();
    setData(planets.results);
  };

  return (
    <StarWarsContext.Provider
      value={
        { data,
          getPlanetsData,
          searchPlanet,
          setsearchPlanet }
      }
    >
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
