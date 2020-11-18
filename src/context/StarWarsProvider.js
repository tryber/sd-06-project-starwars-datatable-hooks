import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

export default function StarWarsProvider({ children }) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
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
    filterByNumericValues: [

    ],
  });

  async function fetchData() {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const APIData = await response.json();
    setData(APIData);
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
