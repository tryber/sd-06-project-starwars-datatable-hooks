import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [nameFilter, setNameFilter] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const zero = 0;
  const minusOne = -1;
  const [appliedFilters, setAppliedFilters] = useState([{
    columnType: '',
    compareType: '',
    numberFilter: zero,
    possibleFilters: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
  }]);

  const applyNameFilter = (str) => {
    const results = [];
    data.forEach((planet) => {
      if (planet.name.includes(str)) {
        results.push(planet);
      }
    });
    setFilteredResults(results);
    if (str === '') setFiltered(false);
    else setFiltered(true);
    setNameFilter(str);
  };

  const applyNumberFilter = (column, compare, value, index) => {
    let filters = [...appliedFilters];
    let temp = {
      columnType: '',
      compareType: '',
      numberFilter: zero,
      possibleFilters: [
        'population',
        'orbital_period',
        'diameter',
        'rotation_period',
        'surface_water',
      ],
    };
    if (!('columnType' in filters[0])) filters = [temp];
    if (index <= filters.length - 1) temp = filters[index];
    if (column !== '') temp.columnType = column;
    if (temp.columnType === 'None') temp.columnType = '';
    if (compare !== '') temp.compareType = compare;
    if (temp.compareType === 'None') temp.compareType = '';
    if (value !== zero) temp.numberFilter = value;

    const maxIndex = filters.length - 1;
    if (filters[maxIndex].columnType !== ''
      && filters[maxIndex].compareType !== '') {
      const structure = {
        columnType: '',
        compareType: '',
        numberFilter: zero,
        possibleFilters: [
          'population',
          'orbital_period',
          'diameter',
          'rotation_period',
          'surface_water',
        ],
      };
      filters.push(structure);
    }

    let results = data;
    filters.forEach((filter) => {
      if (filter.columnType !== '' && filter.compareType !== '') {
        const filteredWithNumbers = [];
        results.forEach((planet) => {
          if (filter.compareType === 'greater') {
            if (filter.numberFilter < parseInt(planet[filter.columnType], 10)) {
              filteredWithNumbers.push(planet);
            }
          }
          if (filter.compareType === 'less') {
            if (filter.numberFilter > parseInt(planet[filter.columnType], 10)) {
              filteredWithNumbers.push(planet);
            }
          }
          if (filter.compareType === 'equal') {
            if (filter.numberFilter === parseInt(planet[filter.columnType], 10)) {
              filteredWithNumbers.push(planet);
            }
          }
        });
        results = filteredWithNumbers;
      }
    });
    setFilteredResults(results);
    if (filters[0].columnType === '' && nameFilter === '') setFiltered(false);
    else setFiltered(true);

    let c = [];
    filters.forEach((filter, i) => {
      if (i > zero) filter.possibleFilters = c;
      c = [...filter.possibleFilters];
      const tempIndex = c.findIndex((b) => b === filter.columnType);
      if (tempIndex > minusOne) c.splice(tempIndex, 1);
    });

    setAppliedFilters(filters);
  };

  const contextValue = {
    data,
    setData,
    filtered,
    nameFilter,
    applyNameFilter,
    filteredResults,
    applyNumberFilter,
    appliedFilters,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf().isRequired,
};

export default Provider;
