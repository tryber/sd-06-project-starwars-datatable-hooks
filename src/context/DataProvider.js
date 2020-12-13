import React, { useState } from 'react';
import Proptypes from 'prop-types';
import DataContext from './DataContext';

const DataProvider = ({ children }) => {
  const [dataApi, setDataApi] = useState([]);
  const [filterName, setFilterName] = useState({ filterByName: { name: '' } });
  const [filterNumber, setFilterNumber] = useState([]);
  const [order, setOrder] = useState({});

  const globalContext = {
    dataApi,
    setDataApi,
    filterName: filterName.filterByName,
    setFilterName,
    filterNumber,
    setFilterNumber,
    order,
    setOrder,
  };

  return (
    <DataContext.Provider value={ globalContext }>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: Proptypes.arrayOf(Proptypes.element).isRequired,
};

export default DataProvider;
