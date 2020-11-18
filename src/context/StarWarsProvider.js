import React, { useState } from 'react';
import propTypes from 'prop-types';
import fetchStarWars from '../services/API';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
      filterByName: {
        name: ''
      },
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: 0,
        }
      ]
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
    });
  };

  // const getFilterColumn = (columnInput) => {
  //   setFilters({
  //     ...filters,
  //     ...filterByName,
  //     filterByNumericValues: [{
  //       column: columnInput,
  //       ...filterByNumericValues,
  //     }],
  //   });
  // };

  // const getFilterComparison = (comparisonInput) => {
  //   setFilters({
  //     ...filters,
  //     filterByNumericValues: [{
  //       ...filterByNumericValues,
  //       comparison: comparisonInput,
  //       ...filterByNumericValues,
  //     }],
  //   });
  // };

  // const getFilterValue = (valueInput) => {
  //   setFilters({
  //     ...filters,
  //     filterByNumericValues: [{
  //       ...filterByNumericValues,
  //       value: valueInput,
  //     }],
  //   });
  // };

  return (
    <StarWarsContext.Provider
      value={{
        data,
        getPlanets,
        getFilterName,
        setFilters,
        filters,
        name: filters.filterByName.name,
        column: filters.filterByNumericValues[0].column,
        comparison: filters.filterByNumericValues[0].comparison,
        value: filters.filterByNumericValues[0].value,
      }}
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: propTypes.func.isRequired,
};

export default StarWarsProvider;
