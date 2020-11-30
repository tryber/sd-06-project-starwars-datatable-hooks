import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import StarWarsAPI from '../services/StarsWarsAPI';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: { column: 'name', sort: 'ASC' },
  });
  const options = ['name', 'rotation_period', 'orbital_period', 'diameter',
    'climate', 'gravity', 'terrain', 'surface_water', 'population', 'residents',
    'films', 'created', 'edited'];

  const numericOptions = ['population', 'orbital_period', 'diameter',
  'rotation_period', 'surface_water'];

  const fetchPlanets = async () => {
    const response = await StarWarsAPI();
    const planetsObject = response.results;
    setPlanets(planetsObject);
  };

  useEffect(() => { fetchPlanets(); }, []);

  useEffect(() => { }, [filters]);

  const setFilterByName = (searchTerm) => {
    setFilters({
      ...filters,
      filterByName: { name: searchTerm },
    });
  };

  const setFilterNumericOptions = (column, comparison, value) => {
    setFilters({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues.concat({
        column,
        comparison,
        value,
      }),
    });
  };

  const setOrder = (column, sort) => {
    setFilters({
      ...filters,
      order: { column, sort },
    });
  };

  const deleteNumericFilter = (deleteFilter) => {
    const filtered = filters.filterByNumericValues
      .filter((filter) => filter !== deleteFilter);
    setFilters({
      ...filters,
      filterByNumericValues: filtered,
    });
  };

  return (
    <StarWarsContext.Provider
      value={ {
        data: { planets },
        filters,
        setFilterByName,
        setFilterNumericOptions,
        deleteNumericFilter,
        setOrder,
        options,
        numericOptions,
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Provider;
