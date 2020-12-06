import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const urlAPI = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const INITIAL_FILTERS = {
    filterByName: {
      name: '',
    },
  };
  const [filters, setFilters] = useState({ ...INITIAL_FILTERS });

  const fetchPlanets = async () => {
    setLoading(true);
    const response = await fetch(urlAPI);
    const json = await response.json();
    json.results.forEach((planet) => {
      delete planet.residents;
    });
    setPlanets(json.results);
    setLoading(false);
    // console.log(json);
  };

  // fetchPlanets();

  const context = {
    planets, fetchPlanets, loading, setLoading, filters, setFilters,
  };

  return (

    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>

  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};
