import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import mockFetchPlanetsInfo from '../services/mockApiServices';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [textSearch, setTextSearch] = useState('');
  // const [numericSearch, setNumericSearch] = useState([]);

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

  /*
  OLD API REQUEST
  const getPlanetsInfo = async () => {
    const planetsInfo = await fetchPlanetsInfo();
    const planetsWithoutResidentsKey = planetsInfo.map((planet) => (
      removeKeyFromObject(planet, 'residents')
    ));
    return planetsWithoutResidentsKey;
  };

  const makeInitialSetup = async () => {
    console.log("Retrieving API info")
    const planetsInfo = await getPlanetsInfo();
    console.log('Request response:', planetsInfo);
    setData(planetsInfo);
    setTableHeaders(Object.keys(planetsInfo[0]));
    setIsFetching(false);
  };
  */
  const contextValue = {
    data,
    isFetching,
    tableHeaders,
    textSearch,
    setTextSearch,
    setData,
    setTableHeaders,
    setIsFetching,
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
