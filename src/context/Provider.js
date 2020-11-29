import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const API = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const INITIAL_FILTERS = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    availableFilters: [],
    columns: [
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
    ],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  };
  const [filters, setFilters] = useState({ ...INITIAL_FILTERS });
  const [changedFilter, setChangedFilters] = useState(true);

  useEffect(() => {
    if (changedFilter) {
      const usedFilters = filters.filterByNumericValues.map((filter) => filter.column);
      setChangedFilters(false);
      setFilters({
        ...filters,
        availableFilters: filters.columns.filter((column) => (
          !usedFilters.includes(column)
        )),
      });
    }
  }, [filters]);

  const fetchPlanets = async () => {
    setLoading(true);
    const requestData = await fetch(API);
    const receivedData = await requestData.json();
    receivedData.results.forEach((planet) => {
      delete planet.residents;
    });
    setData(receivedData.results);
    setLoading(false);
  };

  const context = {
    data, fetchPlanets, loading, setLoading, filters, setFilters, setChangedFilters,
  };
  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape().isRequired,
};
