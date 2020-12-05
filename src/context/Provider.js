import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState();
  const [backupData, setBackupData] = useState();
  const [changedData, setChangedData] = useState(false);
  const [filters, setFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [filterOrder, setFilterOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });

  const contextValue = {
    isFetching,
    setIsFetching,
    data,
    setData,
    backupData,
    setBackupData,
    filters,
    setFilters,
    changedData,
    setChangedData,
    filterOrder,
    setFilterOrder,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
