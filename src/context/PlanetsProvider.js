import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import apiPlanets from '../services';
import StarWarsContext from './StarWarsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: 'Name',
      sort: 'ASC',
    },
  });
  const [comparison, setComparison] = useState('maior que');
  const [filterNumber, setFilterNumber] = useState();
  const [wichColumn, setWichColumn] = useState('population');

  useEffect(() => {
    async function requestPlanets() {
      const planetsResult = await apiPlanets();
      setPlanets(planetsResult);
    }
    requestPlanets();
  }, []);

  const filteringName = (name) => {
    setFilters({
      ...filters,
      filterByName: { name },
    });
  };

  const numericValuesFilter = (column, comparisons, number) => {
    setFilters({
      ...filters,
      filterByNumericValues: ([...filters.filterByNumericValues, {
        column,
        comparisons,
        number,
      }]),
    });
  };

  const contexts = {
    planets,
    setPlanets,
    filters,
    setFilters,
    comparison,
    setComparison,
    wichColumn,
    setWichColumn,
    filterNumber,
    setFilterNumber,
    numericValuesFilter,
    filteringName,
  };

  return (
    <StarWarsContext.Provider value={ { contexts } }>
      {children}
    </StarWarsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(Object).isRequired,
}.isRequired;

export default PlanetsProvider;
