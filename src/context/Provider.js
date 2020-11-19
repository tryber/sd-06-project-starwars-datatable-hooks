import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const urlAPI = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const INITIAL_FILTERS = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  };
  const [filters, setFilters] = useState({ ...INITIAL_FILTERS });

  const fetchPlanets = async () => {
    setLoading(true);
    const requestData = await fetch(urlAPI);
    const receivedData = await requestData.json();
    receivedData.results.forEach((planet) => {
      delete planet.residents;
    });
    setData(receivedData.results);
    setLoading(false);
  };

  const context = {
    data, fetchPlanets, loading, setLoading, filters, setFilters,
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
