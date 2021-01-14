import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [nameFilter, setNameFilter] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

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

  const contextValue = {
    data,
    setData,
    filtered,
    nameFilter,
    applyNameFilter,
    filteredResults,
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
