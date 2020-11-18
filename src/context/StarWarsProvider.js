import React, { useState } from 'react';
import propTypes from 'prop-types';
import fetchStarWars from '../services/API';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  const getPlanets = async () => {
    const planets = await fetchStarWars();
    setData(planets);
  };

  const getFilterName = (nameInput) => {
    setFilters({
      ...filters,
      filterByName: {
        name: nameInput,
      },
    })
  }

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        getPlanets,
        getFilterName,
        name: filters.filterByName.name
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: propTypes.func.isRequired,
};

export default StarWarsProvider;
