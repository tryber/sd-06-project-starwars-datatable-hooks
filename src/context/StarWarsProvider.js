import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanetsInfo from '../services/apiServices';
import removeKeyFromObject from '../helpers/removeKeyFromObject';
// import mockFetchPlanetsInfo from '../services/mockApiServices';
import StarWarsContext from './StarWarsContext';



function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const initialFiltersState = {
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
};
  const [filters, setFilters] = useState(initialFiltersState);

  const getPlanetsInfo = async () => {
    const planetsInfo = await fetchPlanetsInfo();
    const planetsWithoutResidentsKey = planetsInfo.map((planet) => (
      removeKeyFromObject(planet, 'residents')
    ));
    return planetsWithoutResidentsKey;
  };

  const makeInitialSetup = async () => {
    // console.log("Retrieving API info")
    const planetsInfo = await getPlanetsInfo();
    // console.log('Request response:', planetsInfo);
    setData(planetsInfo);
    setTableHeaders(Object.keys(planetsInfo[0]));
    setIsFetching(false);
  };
  
  const contextValue = {
    data,
    tableHeaders,
    isFetching,
    filters,
    makeInitialSetup,
    setFilters,
    // mockedInitialSetup,
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

/*
  IN CASE OF API FAILURE
  // Remova depois que a API retornar
  const getMockedPlanetsInfo = async () => {
    const planetsInfo = mockFetchPlanetsInfo();
    const planetsWithoutResidentsKey = planetsInfo.map((planet) => (
      removeKeyFromObject(planet, 'residents')
    ));
    return planetsWithoutResidentsKey;
  };

  // Remova depois que a API retornar
  const mockedInitialSetup = async () => {
    console.log('Retrieving API info');
    const planetsInfo = await getMockedPlanetsInfo();
    console.log('Request response:', planetsInfo);
    setData(planetsInfo);
    setTableHeaders(Object.keys(planetsInfo[0]));
    setIsFetching(false);
  };
  */
