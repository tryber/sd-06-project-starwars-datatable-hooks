import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchStarWarsPlanets from '../services/starWarsService';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [] });

  const getPlanetsData = async () => {
    const planets = await fetchStarWarsPlanets();
    setData(planets.results);
  };

  const getFilterByName = (searchPlanet) => {
    setFilters({
      ...filters,
      filterByName: { name: searchPlanet },
    });
  };

  return (
    <StarWarsContext.Provider
      value={
        { data,
          getPlanetsData,
          filters,
          getFilterByName }
      }
    >
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
