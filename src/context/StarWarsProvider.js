import React, { useState } from 'react';
import PropTypes from 'prop-types';

import fetchPlanetsAPI from '../services/StarWarsService';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  // const myFilters = {
  //   filters:
  //     {
  //       filterByName: {
  //         name: '',
  //       },
  //       filterByNumericValues: [
  //         {
  //           column: 'population',
  //           comparison: 'maior que',
  //           value: '100000',
  //         },
  //       ],
  //     },
  // };

  const [data, setData] = useState([]);
  const [filters, setFilters] = useState('');
  // const [selectColumn, setSelectColumn] = useState('');
  // const [selectComparison, setSelectComparison] = useState('');
  // const [valueForFilter, setValueForFilter] = useState('');

  const getPlanetList = async () => {
    const planetsAvailable = await fetchPlanetsAPI();
    setData(planetsAvailable);
  };

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        getPlanetList,
        filters,
        setFilters,
        // selectColumn,
        // setSelectColumn,
        // selectComparison,
        // setSelectComparison,
        // valueForFilter,
        // setValueForFilter,
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

export default StarWarsProvider;

StarWarsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
