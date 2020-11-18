import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import apiRequest from '../services';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [nameFilter, setNameFilter] = useState([]);

  const getPlanets = async () => {
    const apiReturn = await apiRequest();
    setData(apiReturn);
  };

  function handleChange({ target }) {
    setNameFilter(target.value);
  }

  return (
    <PlanetsContext.Provider
      value={
        { data, getPlanets, handleChange, filters: { filterByName: { nameFilter } } }
      }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default PlanetsProvider;
