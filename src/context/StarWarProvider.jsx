import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [theadKeys, setTheadKeys] = useState([]);
  const [planetName, setPlanetName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [active, setActive] = useState(false);

  const dataPlanet = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const responseJson = await response.json();
    const infoPlanet = responseJson.results.map((info) => {
      delete info.residents;
      return info;
    });
    // if (planetName.length >= 1) {
    //   infoPlanet = infoPlanet.filter((info) => console.log(info));
    // }

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
    planetName,
    setPlanetName,
    setPlanets,
    dataPlanet,
    setFilterByNumericValues,
    filters: {
      filterByName: {
        name: planetName,
      },
      filterByNumericValues,
      activeFilter: {
        info: `${filterByNumericValues.column}
          é ${filterByNumericValues.comparison}
          ${filterByNumericValues.value}`,
        actived: active,
      },
    },
    setActive,
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
