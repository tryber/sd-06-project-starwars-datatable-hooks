import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';
import dataServicesAPI from '../services/dataServicesAPI';

function Provider({ children }) {
  const [data, setData] = useState(['']);
  const [filteredName, setFilteredName] = useState('');
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: { column: 'name', sort: 'ASC',
    } });

  useEffect(() => {
    const getPlanets = async () => {
      const planets = await dataServicesAPI();
      planets.map((orb) => delete orb.residents);
      setData(planets);
    };
    getPlanets();
  }, []);

  const contextState = {
    data,
    filters,
    setFilters,
    filteredName,
    setFilteredName,
  };

  return (
    <StarWarsContext.Provider value={ contextState }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
