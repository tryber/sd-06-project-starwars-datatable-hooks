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

  const getFilteredPlanets = () => {
    let dataForFiltering = [...data];
    let auxFilter;
    const { filters: { filterByName: { name: planetSearch  } } } = filters;
    const { filters: { filterByNumericValues } } = filters;
    if (hasNumericFilters) {
      filterByNumericValues.forEach((currentFilter) => {
        const { column, comparison, value } = currentFilter;
        switch (comparison) {
          case 'maior que':
            auxFilter = dataForFiltering.filter((planet) => (
              parseInt(planet[column]) > value
            ));
            dataForFiltering = [...auxFilter];
            break;
          case 'menor que':
            auxFilter = dataForFiltering.filter((planet) => (
              parseInt(planet[column]) < value
            ));
            dataForFiltering = [...auxFilter];
            break;
          case 'igual a':
            auxFilter = dataForFiltering.filter((planet) => (
              parseInt(planet[column]) === value
            ));
            dataForFiltering = [...auxFilter];
            break;
          default:
            console.log('Ocorreu um erro na informação de comparação');
        } 
      });
      
      // return parseInt(planet[columnProp]) === valueProp
      // Agora foi, eram strings os dois valores de comparação
      // chamar:
      // const columnProp = filterByNumericValues[0].column;
      // const valueProp = filterByNumericValues[0].value;
      // Criar um array externo, que vai ser alterado a cada
      // caso do forEach.
      // Passar essa lógica de volta pro Provider
    }

    hasNumericFilters
      ? console.log('Provider informou que TEM filtros')
      : console.log('Provider informou que NÃO tem filtros')
    
    return dataForFiltering.filter((planet) => (
      planet.name.toLowerCase().includes(planetSearch.toLowerCase())
    ))

  };

  useEffect(() => {
    makeInitialSetup();
    // mockedInitialSetup();
  }, []);

  useEffect (() => {
    const { filters: { filterByNumericValues } } = filters;
    console.log('Filters foi alterado');
    filterByNumericValues.length > 0 && setHasNumericFilters(true);
    console.log('Ptovider filters state:', filterByNumericValues);
  }, [filters]);
  
  const contextValue = {
    tableHeaders,
    isFetching,
    filters,
    columnFilters,
    comparisonFilters,
    getFilteredPlanets,
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
