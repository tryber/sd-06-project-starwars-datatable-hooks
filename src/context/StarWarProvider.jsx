import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [theadKeys, setTheadKeys] = useState([]);

  const dataPlanet = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const responseJson = await response.json();
    const infoPlanet = responseJson.results.map((info) => {
      delete info.residents;
      return info;
    });

    setPlanets(infoPlanet);
    setTheadKeys(Object.keys(infoPlanet[0]));
  };

  useEffect(() => {
    dataPlanet();
  }, []);

  const data = {
    planets,
    theadKeys,
    setTheadKeys,
  };

  return (
    <StarWarsContext.Provider value={ data }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
