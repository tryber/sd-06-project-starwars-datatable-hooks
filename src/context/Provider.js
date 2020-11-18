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
    setIsFetching(false);
  };

  useEffect(() => {
    reqPlanets();
  }, []);

  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  const filterByName = async () => {
    const { name } = filters.filterByName;
    const planets = await request();
    const byName = await planets.filter((planet) => planet.name.toUpperCase()
      .includes(name.toUpperCase()));
    return byName;
  };

  const filterByNumericValues = async () => {
    const byName = await filterByName();
    await filters.filterByNumericValues.map((element, index) => {
      const fullFiltered = byName.filter((array) => {
        const columns = filters.filterByNumericValues[index].column;
        const comparisons = filters.filterByNumericValues[index].comparison;
        const values = filters.filterByNumericValues[index].value;
        if (comparisons === 'maior que') {
          return array[columns] > parseInt(values, 10);
        } if (comparisons === 'menor que') {
          return array[columns] < parseInt(values, 10);
        }
        return array[columns] === values;
      });
      return fullFiltered;
    });
  };
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
    filterByNumericValues,

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
