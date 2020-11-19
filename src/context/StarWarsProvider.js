import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

export default function StarWarsProvider({ children }) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [columns, setColumns] = useState();
  const initialColumnFilters = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const [availableColumnFilters,
    setAvailableColumnFilters] = useState(initialColumnFilters);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  async function fetchData() {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const APIData = await response.json();
    setData(APIData);
    setColumns(Object.keys(APIData.results[0])
      .filter((column) => column !== 'residents'));
  }

  useEffect(() => {
    const fetchAPI = async () => fetchData();
    fetchAPI();
  },
  []);

  useEffect(() => {
    if (data) setIsLoading(false);
  }, [data]);

  return (
    <StarWarsContext.Provider
      value={ { data,
        isLoading,
        filters,
        numericFilters: filters.filterByNumericValues,
        name: filters.filterByName.name,
        sort: filters.order.sort,
        Ordercolumn: filters.order.column,
        columns,
        order: filters.order,
        initialColumns: initialColumnFilters,
        availableColumnFilters,
        setAvailableColumnFilters,
        setFilters } }
    >
      {children}
    </StarWarsContext.Provider>);
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
