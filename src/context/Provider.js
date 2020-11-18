import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [isLoading, setLoading] = useState([true]);
  const [dataTable, setDataTable] = useState([]);
  const [headersTable, setHeaders] = useState([]);
  const [filterByName, setFilterName] = useState({ name: '' });
  const [filterByNumericValues, setNumericValues] = useState([{
    column: '',
    comparision: '',
    value: '',
  }]);
  const contextValue = {
    dataTable,
    setDataTable,
    headersTable,
    setHeaders,
    filterByName,
    setFilterName,
    filterByNumericValues,
    setNumericValues,
    isLoading,
    setLoading,
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
