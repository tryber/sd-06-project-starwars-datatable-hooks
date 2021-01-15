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
  const [filterToApply, setFilter] = useState({
    columnType: '',
    compareType: 'maior que',
    numberFilter: zero,
    possibleFilters: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
  });
  const [appliedFilters, setAppliedFilters] = useState([]);

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

  const applyNumberFilter = (column, compare, value, trigger, filtersOverride = zero) => {
    let filters = { ...filterToApply };
    let doneFilters = [...appliedFilters];
    const temp = { ...filterToApply };
    if (!('columnType' in filters)) filters = [temp];
    if (column !== '') temp.columnType = column;
    if (temp.columnType === 'None') temp.columnType = '';
    if (compare !== '') temp.compareType = compare;
    if (temp.compareType === 'None') temp.compareType = '';
    if (value !== zero) temp.numberFilter = value;

    if (!trigger) filters = temp;

    if (trigger) {
      if (filters.columnType !== ''
      && filters.compareType !== '') {
        doneFilters.push(filters);
      }

      let results = data;
      doneFilters.forEach((filter) => {
        if (filter.columnType !== '' && filter.compareType !== '') {
          const filteredWithNumbers = [];
          results.forEach((planet) => {
            if (filter.compareType === 'maior que') {
              if (filter.numberFilter < parseInt(planet[filter.columnType], 10)) {
                filteredWithNumbers.push(planet);
              }
            }
            if (filter.compareType === 'menor que') {
              if (filter.numberFilter > parseInt(planet[filter.columnType], 10)) {
                filteredWithNumbers.push(planet);
              }
            }
            if (filter.compareType === 'igual a') {
              if (filter.numberFilter === planet[filter.columnType]) {
                filteredWithNumbers.push(planet);
              }
            }
          });
          results = filteredWithNumbers;
        }
      });

      if (doneFilters.length === zero) setFiltered(false);
      else if (doneFilters.length > zero) setFiltered(true);

      if (filtersOverride !== zero) {
        filtersOverride.forEach((filter) => {
          if (filter.columnType !== '' && filter.compareType !== '') {
            const filteredWithNumbers = [];
            results.forEach((planet) => {
              if (filter.compareType === 'maior que') {
                if (filter.numberFilter < parseInt(planet[filter.columnType], 10)) {
                  filteredWithNumbers.push(planet);
                }
              }
              if (filter.compareType === 'menor que') {
                if (filter.numberFilter > parseInt(planet[filter.columnType], 10)) {
                  filteredWithNumbers.push(planet);
                }
              }
              if (filter.compareType === 'igual a') {
                if (filter.numberFilter === planet[filter.columnType]) {
                  filteredWithNumbers.push(planet);
                }
              }
            });
            results = filteredWithNumbers;
          }
        });

        if (filtersOverride.length === zero) setFiltered(false);
        else if (filtersOverride.length > zero) setFiltered(true);

        doneFilters = [...filtersOverride];
      }
      setFilteredResults(results);

      let c = [];
      doneFilters.forEach((filter, i) => {
        if (i > zero) filter.possibleFilters = c;
        c = [...filter.possibleFilters];
        const tempIndex = c.findIndex((b) => b === filter.columnType);
        if (tempIndex > minusOne) c.splice(tempIndex, 1);
      });
      filters.possibleFilters = [...c];
    }

    setAppliedFilters(doneFilters);
    setFilter(filters);
  };

  const removeFilter = ({ target }) => {
    const tempArr = [...appliedFilters];
    const tempIndex = appliedFilters.findIndex((a) => a.columnType === target.name);
    if (tempIndex > minusOne) tempArr.splice(tempIndex, 1);
    applyNumberFilter('', '', zero, true, tempArr);
    setAppliedFilters(tempArr);
  };

  const contextValue = {
    data,
    setData,
    filtered,
    nameFilter,
    applyNameFilter,
    filteredResults,
    applyNumberFilter,
    filterToApply,
    appliedFilters,
    removeFilter,
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
