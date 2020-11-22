import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const INITIAL_NUMBER = 0;

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(INITIAL_NUMBER);
  const [tableFilter, setTableFilter] = useState([]);
  const [filterExcludeData, setFilterExcludeData] = useState([]);

  const filters = {
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: tableFilter,
    },
  };

  const allFilters = () => {
    setTableFilter(tableFilter.concat({ column, comparison, value }));
    console.log(filters.filters.filterByNumericValues);
  };

  const handleClick = () => {
    if (comparison === 'maior que') {
      const newTable = data
        .filter((planet) => (
          parseInt(planet[column], 10) > parseInt(value, 10)
            && planet[column] !== 'unknown'));
      const excludeData = data
        .filter((planet) => (
          parseInt(planet[column], 10) <= parseInt(value, 10)
            || planet[column] === 'unknown'));
      setData(newTable);
      setFilterExcludeData(excludeData);
      allFilters();
      console.log(excludeData);
    }
    if (comparison === 'menor que') {
      const newTable = data
        .filter((planet) => (
          parseInt(planet[column], 10) < parseInt(value, 10)
            && planet[column] !== 'unknown'));
      return setData(newTable);
    }
    if (comparison === 'igual a') {
      const newTable = data
        .filter((planet) => (
          parseInt(planet[column], 10) === parseInt(value, 10)
            && planet[column] !== 'unknown'));
      return setData(newTable);
    }
  };
  const context = {
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    handleClick,
    tableFilter,
    setTableFilter,
    allFilters,
  };

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        setData,
        name,
        setName,
        filters,
        context,
        handleClick,
        filterExcludeData,
      } }
    >
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default StarWarsProvider;
