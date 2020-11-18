import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './StarWarsContext';
import fetchPlanets from '../services/FetchPlanets';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [planetKeys, setPlanetKeys] = useState([]);

  const getPlanets = async () => {
    setLoading(true);

    let planets = await fetchPlanets();

    planets = planets.map((planet) => {
      delete planet.residents;
      return planet;
    });

    const usedKeys = Object.keys(planets[0]);

    setData(planets);
    setPlanetKeys(usedKeys);
    setLoading(false);
  };

  const contextValue = {
    data,
    setData,
    loading,
    setLoading,
    planetKeys,
    getPlanets,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

export default StarWarsProvider;

StarWarsProvider.propTypes = { children: PropTypes.node.isRequired };
