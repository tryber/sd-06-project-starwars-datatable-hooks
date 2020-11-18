import React, { useState } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchApi from '../services/fetchApi';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [searchPlanet, setSearchPlanet] = useState('');

  const fetchPlanets = async () => {
    const planetsApi = await fetchApi();
    setData(planetsApi.results);
    setIsFetching(true);
  };

  const contextValue = {
    data,
    isFetching,
    fetchPlanets,
    searchPlanet,
    setSearchPlanet,
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
