import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { fetchPlanetsApi } from '../services/Api';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [searchPlanet, setSearchPlanet] = useState('');

  const getPlanets = async () => {
    const response = await fetchPlanetsApi();
    const planetsReceived = response.results;
    setPlanets(planetsReceived);
    console.log('Provider, chamou api', planetsReceived);
    console.log('Planets', planets);
  };

  return (
    <span>
      <StarWarsContext.Provider
        value={ { planets, getPlanets, searchPlanet, setSearchPlanet } }
      >
        {children}
      </StarWarsContext.Provider>
    </span>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf(Object).isRequired,
};

export default StarWarsProvider;
