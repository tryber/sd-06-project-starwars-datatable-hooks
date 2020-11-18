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
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: 0,
      },
    ],
  });

  const getData = async () => {
    const planets = await fetchStarWars();
    setData(planets);
  };

  const getFilterName = (nameInput) => {
    setFilters({
      ...filters,
      filterByName: {
        name: nameInput,
      },
    });
  };

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        getData,
        getFilterName,
        setFilters,
        filters,
        name: filters.filterByName.name,
        column: filters.filterByNumericValues[0].column,
        comparison: filters.filterByNumericValues[0].comparison,
        value: filters.filterByNumericValues[0].value,
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
