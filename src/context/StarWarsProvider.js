import React, { useState } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchData from '../services/starWarsService';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [{
      column: '',
      comparison: '',
      value: 0,
    }],
  });

  const getData = async () => {
    const returnApi = await fetchData();
    setData(returnApi);
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
  //     filterByNumericValues: [{
  //       ...filterByNumericValues,
  //       columnn: columnInput,
  //     }]
  //   })
  // }

  // const getFilterComparison = (comparisonInput) => {
  //   setFilters({
  //     ...filters,
  //     filterByNumericValues: [{
  //       ...filterByNumericValues,
  //       columnn: comparisonInput,
  //     }]
  //   })
  // }

  // const getFilterValue = (valueInput) => {
  //   setFilters({
  //     ...filters,
  //     filterByNumericValues: [{
  //       ...filterByNumericValues,
  //       columnn: valueInput,
  //     }]
  //   })
  // }

  const context = {
    data,
    getData,
    name: filters.filterByName.name,
    getFilterName,
    filters,
    setFilters,
    name: filters.filterByName.name,
    column: filters.filterByNumericValues[0].column,
    comparison: filters.filterByNumericValues[0].comparison,
    value: filters.filterByNumericValues[0].value,
  };

  return (
    <StarWarsContext.Provider value={ { context } }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: propTypes.func.isRequired,
};

export default StarWarsProvider;
