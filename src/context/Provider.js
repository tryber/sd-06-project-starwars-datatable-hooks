import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [dataTable, setDataTable] = useState([]);
  const [headersTable, setHeaders] = useState([]);
  const [isFiltered, setFilters] = useState(false);
  const [filterByName, setFilterName] = useState({ name: '' });
  const [filterByNumericValues, setNumericValues] = useState({
    column: 'population',
    comparision: 'maior que',
    value: 0,
  });
  const contextValue = {
    dataTable,
    setDataTable,
    headersTable,
    setHeaders,
    filterByName,
    setFilterName,
    filterByNumericValues,
    setNumericValues,
    isFiltered,
    setFilters,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
