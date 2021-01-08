import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';
import APIFetcher from '../services/fetch';

export default function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [sorting, setSorting] = useState({});
  const [order, setOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });
  const [numericFilter, setNumericFilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  async function getAPI() {
    const response = await APIFetcher();
    setPlanets(response);
  }

  function sortOptions(a, b) {
    const onePositive = 1;
    const oneNegative = -1;
    const zero = 0;

    if (order.column === 'name') {
      if (order.sort === 'ASC') {
        if (a.name > b.name) return onePositive;
        if (a.name < b.name) return oneNegative;
      } else {
        if (a.name < b.name) return onePositive;
        if (a.name > b.name) return oneNegative;
      }
      return zero;
    }
    if (order.sort === 'ASC') return a[order.column] - b[order.column];
    return b[order.column] - a[order.column];
  }

  return (
    <StarWarsContext.Provider
      value={ {
        planets,
        getAPI,
        filters: {
          filterByName: { name: nameFilter },
          filterByNumericValues: [numericFilter],
        },
        setOrder,
        sortOptions,
        setPlanets,
        sorting,
        setSorting,
        setNameFilter,
        setNumericFilter,
      } }
    >
      {children}
    </StarWarsContext.Provider>

  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
