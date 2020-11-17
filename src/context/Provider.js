import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './starContext';

function Provider({ children }) {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState({});
  const [filteredData, setFilteredData] = useState({});
  const [filters, setFilters] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  const context = {
    isFetching,
    setIsFetching,
    data,
    setData,
    filters,
    setFilters,
    filteredData,
    setFilteredData,
  };

  return (
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any),
};

Provider.defaultProps = {
  children: [],
};

export default Provider;
