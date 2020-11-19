import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import { fetchData } from '../services/starWarsAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [error, setError] = useState(null);
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
    fetchData()
      .then((response) => setData(response.results))
      .catch((response) => setError(response.message))
      .then(() => setLoading(false));
  };

  useEffect(() => {
    featchPlanets();
  }, [featchPlanets]);

  const context = {
    data,
    loading,
    error,
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
