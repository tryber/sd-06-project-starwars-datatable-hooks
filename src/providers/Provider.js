import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

export default function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  const getPlanetsFromAPI = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const responseJson = await response.json();
    const filteredPlanets = await responseJson.results
      .map((item) => (item));
    setData(filteredPlanets);
  };

  useEffect(() => {
    getPlanetsFromAPI();
  }, []);

  const infos = {
    data,
    setNameFilter,
    filters: {
      filterByName: {
        name: nameFilter,
      },
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
