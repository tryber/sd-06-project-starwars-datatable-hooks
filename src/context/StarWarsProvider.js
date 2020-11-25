import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import { starWarsAPI } from '../services/starWarsAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    availableColumns: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
  });
  const featchPlanets = async () => {
    setLoading(true);
    starWarsAPI().then((response) => {
      setData(response);
    });
    setLoading(false);
  };

  useEffect(() => {
    featchPlanets();
  }, []);

  const context = {
    data,
    loading,
    filters,
    setFilters,
  };
  return (
    <StarWarsContext.Provider value={ context }>
      { children}
    </StarWarsContext.Provider>
  );
}
StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default StarWarsProvider;
