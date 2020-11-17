import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [dataTable, setDataTable] = useState([]);
  const [headersTable, setHeaders] = useState([]);
  const contextValue = {
    dataTable,
    setDataTable,
    headersTable,
    setHeaders,
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
