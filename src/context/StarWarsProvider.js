import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { fetchPlanetsInfo, fetchTableHeaders } from '../services/apiServices';
import StarWarsContext from './StarWarsContext';
import removeItemFromArray from '../helpers/removeItemFromArray';

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
    setIsLoading,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
