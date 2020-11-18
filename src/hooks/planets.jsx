import
React,
{ createContext,
  useMemo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  availableColumnFilters,
  availableNumericComparisons,
  compareColumns,
} from './utils/numericComparison';
import fetchPlanets from '../services/api';
import sortPlanetsByColumn from './utils/sortPlanets';

const planetContext = createContext();

const filterStructure = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'name',
    sort: 'ASC',
  },
};

function PlanetProvider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState(filterStructure);

  useEffect(() => {
    fetchPlanets().then((data) => {
      const apiPlanetsData = [...data];
      apiPlanetsData.sort((a, b) => (a.name).localeCompare(b.name));

      setPlanets(apiPlanetsData);
      setPlanetsData(apiPlanetsData);
      setLoading(false);
    });
  }, []);

  const planetInfo = useMemo(() => {
    const examplePlanet = planetsData[0];
    let headers;

    if (examplePlanet) {
      headers = (
        Object
          .keys(examplePlanet)
          .filter((header) => header !== 'residents')
      );
    }

    return headers;
  }, [planetsData]);

  const planetsSortOptions = useMemo(() => {
    const badOptions = [
      'created',
      'updated',
      'films',
      'url',
    ];

    let sortOptions;

    if (planetInfo) {
      sortOptions = planetInfo.filter((info) => !badOptions.includes(info));
    }

    return sortOptions;
  }, [planetInfo]);

  const nameFiltered = useMemo(() => {
    const { filterByName: { name } } = filters;

    return name;
  }, [filters]);

  const availableFilters = useMemo(() => {
    const { filterByNumericValues } = filters;

    const usedFilters = filterByNumericValues.map((filter) => filter.column);

    const unusedFilters = availableColumnFilters.filter((filter) => (
      !usedFilters.includes(filter)
    ));

    return unusedFilters;
  }, [filters]);

  const usedFilters = useMemo(() => {
    const filtersInUse = availableColumnFilters.filter((filter) => (
      !availableFilters.includes(filter)
    ));

    return filtersInUse;
  }, [availableFilters]);

  const filterPlanetsByName = useCallback((nameLike) => {
    const filteredPlanets = planetsData.filter((planet) => {
      const nameRegex = new RegExp(nameLike, 'i');
      const planetMatches = nameRegex.test(planet.name);

      return planetMatches;
    });

    setPlanets(filteredPlanets);

    setFilters((oldFilters) => ({
      ...oldFilters,
      filterByName: { name: nameLike },
    }));
  }, [planetsData]);

  const filterByNumerics = useCallback(({ column, value, comparison }) => {
    const validOptions = (
      availableColumnFilters.includes(column)
      && availableNumericComparisons.includes(comparison)
    );

    if (!validOptions) {
      return;
    }

    const filteredPlanetsByNumericComparison = planets.filter((planet) => (
      compareColumns(planet[column], comparison, value)
    ));

    setPlanets(filteredPlanetsByNumericComparison);

    const oldNumericFilters = filters.filterByNumericValues;
    const newFilterAdded = {
      column,
      comparison,
      value,
    };

    setFilters((oldFilters) => ({
      ...oldFilters,
      filterByNumericValues: [...oldNumericFilters, newFilterAdded],
    }));
  }, [filters.filterByNumericValues, planets]);

  const removeFilter = useCallback((toRemoveColumn) => {
    const newFilters = filters
      .filterByNumericValues
      .filter((oldFilter) => oldFilter.column !== toRemoveColumn);

    const { filterByName: { name } } = filters;

    // re-applying filters

    const filteredPlanetsByName = planetsData.filter((planet) => {
      const nameRegex = new RegExp(name, 'i');
      const planetMatches = nameRegex.test(planet.name);

      return planetMatches;
    });

    let filteredPlanetsByColumns = filteredPlanetsByName;

    newFilters.forEach(({ column, comparison, value }) => {
      filteredPlanetsByColumns = filteredPlanetsByColumns.filter((planet) => (
        compareColumns(planet[column], comparison, value)
      ));
    });

    setFilters((oldFilters) => ({
      ...oldFilters,
      filterByNumericValues: newFilters,
    }));

    setPlanets(filteredPlanetsByColumns);
  }, [filters, planetsData]);

  const sortPlanets = useCallback((column, direction) => {
    const sortedPlanets = sortPlanetsByColumn(planets, column, direction);

    setPlanets(sortedPlanets);
  }, [planets]);

  return (
    <planetContext.Provider
      value={ {
        loading,
        planets,
        planetInfo,
        planetsSortOptions,
        nameFiltered,
        availableFilters,
        usedFilters,
        filterPlanetsByName,
        filterByNumerics,
        removeFilter,
        sortPlanets,
      } }
    >
      {children}
    </planetContext.Provider>
  );
}

function usePlanets() {
  const context = useContext(planetContext);

  if (!context) {
    throw new Error('You must use this hook within its provider');
  }

  return context;
}

export { PlanetProvider, usePlanets };
