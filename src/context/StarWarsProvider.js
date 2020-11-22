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

  const getFilterByNumericValues = ({ column, comparison, value }) => {
    const { filterByNumericValues: oldFiltersApplied } = filters;
    const newFilter = { column, comparison, value };

    setFilters({
      ...filters,
      filterByNumericValues: [...oldFiltersApplied, newFilter],
    });
  };

  const handleClick = (filtered) => {
    getFilterByNumericValues(filtered);
  };

  return (
    <StarWarsContext.Provider
      value={
        { data,
          getPlanetsData,
          filters,
          getFilterByName,
          getFilterByNumericValues,
          handleClick }
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
