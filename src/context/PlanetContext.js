import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export const PlanetContext = createContext();

const PlanetContextProvider = (props) => {
  const [planets] = useState([
    { name: 'Tattoine', id: uuidv4() },
  ]);
  const [planets, setPlanets] = useState();

  useEffect(() => {
    async function fetchPlanets() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      const { results } = data;
      setPlanets(results);
    }
    fetchPlanets();
  }, []);

  const { children } = props;
  return (
    <PlanetContext.Provider value={ { planets } }>
      {children}
    </PlanetContext.Provider>
  );
};
export default PlanetContextProvider;
PlanetContextProvider.propTypes = {
  children: PropTypes.objectOf().isRequired,
};