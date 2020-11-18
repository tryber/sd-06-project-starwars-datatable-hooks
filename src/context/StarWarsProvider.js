import React, { useState } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchPlanets from '../services/StarWarsService';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(
    {
      filterByName: { name: '' },
      filterByNumericValues: [],
    },
  );

  async function getPlanetsData() {
    const planetsInfo = await fetchPlanets();
    setData(planetsInfo.results);
  }

  function filterForms() {
    const { filterByNumericValues } = filters;
    const { column, comparison, value } = filterByNumericValues;
    const dropFilter = data.filter((planet) => {
      if (comparison === 'maior que') {
        return planet[column] > parseInt(value, 10);
      }
      if (comparison === 'menor que') {
        return planet[column] < parseInt(value, 10);
      }
      if (comparison === 'igual a') {
        return planet[column] === value;
      }
      return data;
    });
    return setData(dropFilter);
  }

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        filterForms,
        getPlanetsData,
        filters,
        setFilters,
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default StarWarsProvider;
