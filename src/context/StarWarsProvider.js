import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchApi from '../services/fetchApi';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchPlanets = async () => {
    const planetsApi = await fetchApi();
    setData(planetsApi.results);
    setIsFetching(true);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const contextValue = {
    data,
    isFetching,
    fetchPlanets,
  };
  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: propTypes.arrayOf(propTypes.object).isRequired,
};

export default StarWarsProvider;
