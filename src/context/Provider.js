import React, { useState } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import StarWarsAPI from '../services/StarsWarsAPI';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({ 
    filterByName: { name: ''},
    filterByNumericValues: [],
    order: { column: 'Name', sort: 'ASC' }, 
  })

  const fetchPlanets = async () => {
    const response = await StarWarsAPI();
    const planetsObject = response.results;
    setPlanets(planetsObject);
  };

  const setFilterByName = (searchTerm) => {
    setFilters({
      ...filters,
      filterByName: { name: searchTerm },
    })
  }

  const setFilterNumericOptions = (column, comparison, value) => {
    setFilters({
      ...filters,
      filterByNumericValues: [{
        column,
        comparison,
        value,
      }],
    })
  }

  const context = {
    fetchPlanets,
    data: { planets },
    filters,
    setFilterByName,
    setFilterNumericOptions,
  };

  return (
    <StarWarsContext.Provider value={ { context } }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Provider;
