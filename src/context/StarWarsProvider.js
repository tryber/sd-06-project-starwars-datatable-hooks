import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [headerKeys, setHeaderKeys] = useState([]);

  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const fetchAPI = async () => {
    const resp = await fetch(URL);
    const rJson = await resp.json();
    const dataPlanets = await rJson.results.map((dataPlanet) => {
      delete dataPlanet.residents;
      return dataPlanet;
    });
    setData(dataPlanets);
    setIsFetching(false);
    setHeaderKeys(Object.keys(dataPlanets[0]));
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const allData = { data, isFetching, headerKeys, setHeaderKeys };
  return (
    <StarWarsContext.Provider value={ allData }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
