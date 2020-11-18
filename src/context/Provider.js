import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const urlAPI = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function Provider({ children }) {
  const [planets, setPlanets] = useState(null);
  const [loading, setLoading] = useState(false);
  const INITIAL_FILTERS = {
    filterByName: {
      name: '',
    },
  };
  const [filters, setFilters] = useState({ ...INITIAL_FILTERS });

  const fetchPlanets = async () => {
    const requestData = await fetch(urlAPI);
    const receivedData = await requestData.json();
    receivedData.results.forEach((planet) => {
      delete planet.residents;
    });
    setPlanets(receivedData.results);
  };

  const context = {
    planets, fetchPlanets, loading, setLoading, filters, setFilters,
  };
  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape().isRequired,
};
