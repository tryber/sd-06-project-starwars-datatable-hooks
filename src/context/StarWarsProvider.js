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
    console.log(filterByNumericValues[0]);
    const dropFilter = data.filter((planet) => {
      if (filterByNumericValues[0].comparison === 'maior que') {
        return planet[filterByNumericValues[0].column]
          > parseInt(filterByNumericValues[0].value, 10);
      }
      if (filterByNumericValues[0].comparison === 'menor que') {
        return planet[filterByNumericValues[0].column]
          < parseInt(filterByNumericValues[0].value, 10);
      }
      if (filterByNumericValues[0].comparison === 'igual a') {
        return planet[filterByNumericValues[0].column]
          === filterByNumericValues[0].value;
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
