import React, { useState } from 'react';
import StarWarsContext from './StarWarsContext';
import removeItemFromArray from '../helpers/removeItemFromArray';
import { fetchPlanetsInfo, fetchTableHeaders } from '../services/apiServices';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPlanetsInfo = async () => {
    const planetsInfo = await fetchPlanetsInfo();
    setData(planetsInfo);
  };

  const getTableHeaders = async () => {
    const retrievedTableHeaders = await fetchTableHeaders();
    const filteredTableHeaders = removeItemFromArray(retrievedTableHeaders, 'residents');
    setTableHeaders(filteredTableHeaders);
  };

  const contextValue = {
    data,
    isLoading,
    tableHeaders,
    getPlanetsInfo,
    getTableHeaders,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

export default StarWarsProvider;
