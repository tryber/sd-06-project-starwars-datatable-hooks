import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [headerKeys, setHeaderKeys] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [numericFilter, setNumericFilter] = useState({ column: '',
    comparison: '',
    value: '',
  });

  const getApiPlanets = async () => {
    const responseApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const dados = await responseApi.json();
    const planets = await dados.results
      .map((item) => {
        delete item.residents;
        return item;
      });
    setData(planets);
    setHeaderKeys(Object.keys(planets[0]));
  };

  useEffect(() => {
    getApiPlanets();
  }, []);

  const infos = {
    data,
    isLoading,
    setNumericFilter,
    setIsLoading,
    headerKeys,
    setNameFilter,
    filters: {
      filterByName: {
        name: nameFilter,
      },
      filterByNumericValues: [numericFilter],
    },
  };

  useEffect(() => {
    console.log(infos);
  }, [infos]);

  return (
    <StarWarsContext.Provider value={ infos }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
