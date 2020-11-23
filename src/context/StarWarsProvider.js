import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import dataAPI from '../services/getApi';
import StarWarsContext from './StarWarsContext';

const DEFAULT_FILTER = {
  filterByName: { name: '' },
  filterByNumericValues: [],
};

function Provider({ children }) {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [dataIsEmpty, setDataIsEmpty] = useState(true);
  const [filters, setFilters] = useState(DEFAULT_FILTER);

  const fetchPlanets = async () => {
    setLoading(true);
    const { results } = await dataAPI();
    setData(results);
    setLoading(false);
    setDataIsEmpty(false);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const contextValue = {
    fetchPlanets,
    isLoading,
    setLoading,
    data,
    setData,
    dataIsEmpty,
    filters,
    setFilters,
  };

  return (
    <StarWarsContext.Provider value={ { ...contextValue } }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Provider;
