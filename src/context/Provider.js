import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const results = await response.json();
    setData(results.results);
    setFilteredPlanets(results.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const context = { data, loading, filteredPlanets, setFilteredPlanets };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
