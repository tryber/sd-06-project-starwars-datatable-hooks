import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanetsInfo from '../services/apiServices';
import removeKeyFromObject from '../helpers/removeKeyFromObject';
import compareAndFilterArrays from '../helpers/compareAndFilterArrays';
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
    [
      'population', 'orbital_period', 'diameter',
      'rotation_period', 'surface_water',
    ],
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
    const planetsInfo = await getPlanetsInfo();
    setData(planetsInfo);
    setTableHeaders(Object.keys(planetsInfo[0]));
    setIsFetching(false);
  };

  const getFilteredPlanets = () => {
    let dataForFiltering = [...data];
    let auxFilter;
    const { filters: { filterByName: { name: planetSearch } } } = filters;
    const { filters: { filterByNumericValues } } = filters;
    if (hasNumericFilters) {
      filterByNumericValues.forEach((currentFilter) => {
        const { column, comparison, value } = currentFilter;
        switch (comparison) {
        case 'maior que':
          auxFilter = dataForFiltering.filter((planet) => (
            Number(planet[column]) > value
          ));
          dataForFiltering = [...auxFilter];
          break;
        case 'menor que':
          auxFilter = dataForFiltering.filter((planet) => (
            Number(planet[column]) < value
          ));
          dataForFiltering = [...auxFilter];
          break;
        case 'igual a':
          auxFilter = dataForFiltering.filter((planet) => (
            Number(planet[column]) === value
          ));
          dataForFiltering = [...auxFilter];
          break;
        default:
          console.log('Comparison information error');
        }
      });
    }

    return dataForFiltering.filter((planet) => (
      planet.name.toLowerCase().includes(planetSearch.toLowerCase())
    ));
  };

  const applyFilter = (filterToApply) => {
    // precisa desse prevState mesmo???
    setFilters({
      ...filters,
      filters: {
        ...filters.filters,
        filterByNumericValues: [
          ...filters.filters.filterByNumericValues,
          filterToApply,
        ],
      },
    });
  };

  const deleteFilter = (filterToDelete) => {
    const { filters: { filterByNumericValues } } = filters;
    const newFilters = filterByNumericValues.filter((currFilter) => (
      currFilter.column !== filterToDelete
    ));
    setFilters({
      ...filters,
      filters: {
        ...filters.filters,
        filterByNumericValues: newFilters,
      },
    });
  };

  useEffect(() => {
    makeInitialSetup();
    // mockedInitialSetup();
  }, []);

  useEffect(() => {
    const { filters: { filterByNumericValues } } = filters;
    const minArraySize = 0;
    setHasNumericFilters(filterByNumericValues.length > minArraySize);
  }, [filters]);

  const contextValue = {
    tableHeaders,
    isFetching,
    filters,
    columnFilters,
    comparisonFilters,
    getFilteredPlanets,
    setFilters,
    setColumnFilters,
    applyFilter,
    deleteFilter,
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
  // IN CASE OF API FAILURE
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
    console.log('Retrieving  MOCKED API info');
    const planetsInfo = await getMockedPlanetsInfo();
    console.log('Request MOCKED response:', planetsInfo);
    setData(planetsInfo);
    setTableHeaders(Object.keys(planetsInfo[0]));
    setIsFetching(false);
  };
  */
