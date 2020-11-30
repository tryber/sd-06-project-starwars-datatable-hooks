import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [usedFilters, setUsedFilters] = useState([]);
  const [name, setName] = useState('');
  const [filters, setFilters] = useState({ });
  const [filterFields, setFilterFields] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const contextValue = {
    planets,
    setPlanets,
    filteredPlanets,
    setFilteredPlanets,
    usedFilters,
    setUsedFilters,
    name,
    setName,
    filters,
    setFilters,
    filterFields,
    setFilterFields,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf().isRequired,
};

export default Provider;
