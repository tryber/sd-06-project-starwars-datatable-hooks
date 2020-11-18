import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import request from '../services/request';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const reqPlanets = async () => {
    const planets = await request();
    setData(planets);
  };

  useEffect(() => {
    reqPlanets();
  }, []);

  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });
  const contextValue = {
    data,
    setData,
    filters,
    setFilters,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    isFetching,
    setIsFetching,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.objectOf(propTypes.any).isRequired,
};
export default Provider;
