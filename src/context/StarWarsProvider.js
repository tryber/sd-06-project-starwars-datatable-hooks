import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanetsInfo from '../services/apiServices';
import removeKeyFromObject from '../helpers/removeKeyFromObject';
// import mockFetchPlanetsInfo from '../services/mockApiServices';
import StarWarsContext from './StarWarsContext';



function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [hasNumericFilters, setHasNumericFilters] = useState(false);

  const initialFiltersState = {
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
};
  const [filters, setFilters] = useState(initialFiltersState);
  const [columnFilters, setColumnFilters] = useState(
    ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water']
  );
  const comparisonFilters = ['maior que', 'menor que', 'igual a'];

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


  const generateFilteredData = () => {
    const { filters: { filterByName: { name: filteredName } } } = filters;
    const { filters: { filterByNumericValues } } = filters;
    //const [{ column, comparison, value }] = filterByNumericValues;

    // Fazer uma função que checa na mão grande os maior que
    // fazendo o filtro pra cada if (if do maior que, etc)
    // Fazer filtros sucessivos, ao invés de cheio de &&
    // Para cada elemento do array de filtros (o filterByNumericValues)
    // chamar essa função descrita acima
    // usar planet[column]
    console.log('generateFilteredData called');
    console.log('filterByNumericValues', filterByNumericValues);
    console.log('filterByNumericValues[0]', filterByNumericValues[0]);
    //const [{ column }] = filterByNumericValues[0];
    // const filterResult = data.filter((planet) => {
    //   if (comparison === 'maior que') {
    //     return planet[column] > value;
    //   }
    //   if (comparison === 'menor que') {
    //     return planet[column] < value;
    //   }
    //   if (comparison === 'igual a') {
    //     return planet[column] === value;
    //   }
    // });
    // console.log('filter results', filterResult);

    /*
    Filter properties
    column: // population, orbital_period, diameter, etc
    comparison: '',
    value: 0,
    */
  
  };

  useEffect (() => {
    const { filters: { filterByNumericValues } } = filters;
    console.log('Filters foi alterado');
    filterByNumericValues.length > 0 && setHasNumericFilters(true);
  }, [filters]);
  
  const contextValue = {
    data,
    tableHeaders,
    isFetching,
    filters,
    columnFilters,
    comparisonFilters,
    hasNumericFilters,
    generateFilteredData,
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
