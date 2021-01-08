import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchFunction from '../services/FetchAPI';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });
  const [arrFilters, setArrFilters] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);
  const [deletedFilters, setDeletedFilters] = useState([]);
  const [searchNumState, setSearchNumState] = useState({
    column: '',
    comparison: '',
    value: 0,
  });
  const [sortTableState, setSortTableState] = useState({
    column: 'name',
    sort: 'ASC',
  });
  const [orderState, setOrderState] = useState(['name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'films',
    'created',
    'edited',
    'url']);

  useEffect(() => {
    fetchFunction().then((response) => {
      setPlanets(response);
    });
  }, []);

  const data = {
    planets,
    filters,
    setFilters,
    arrFilters,
    setArrFilters,
    searchNumState,
    setSearchNumState,
    sortTableState,
    setSortTableState,
    deletedFilters,
    setDeletedFilters,
    orderState,
    setOrderState,
  };

  return (
    <StarWarsContext.Provider value={ data }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
