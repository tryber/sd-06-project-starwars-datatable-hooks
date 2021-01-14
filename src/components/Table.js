import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Table() {
  const { data,
    isLoading,
    name,
    numericFilters,
    sort,
    Ordercolumn,
    initialColumns,
  } = useContext(StarWarsContext);

  const zero = 0;
  const negativeOne = -1;

  if (isLoading) {
    return <>loading </>;
  }
  const filterPlanetsByName = (planets) => planets.filter(
    (planet) => planet.name.includes(name),
  );

  const isBigger = (planetNumber, filterNumber) => (
    parseInt(planetNumber, 10) > parseInt(filterNumber, 10));
  const isSmaller = (planetNumber, filterNumber) => (
    parseInt(planetNumber, 10) < parseInt(filterNumber, 10));
  const isEqual = (planetNumber, filterNumber) => (
    parseInt(planetNumber, 10) === parseInt(filterNumber, 10));

  const getComparison = (planet, column, comparison, value) => {
    const comparisons = {
      'maior que': isBigger(planet[column], value),
      'menor que': isSmaller(planet[column], value),
      'igual a': isEqual(planet[column], value),
    };
    return comparisons[comparison];
  };

  const filterPlanetsByNumericValues = (planets) => (planets.filter(
    (planet) => (!numericFilters.length > zero ? planet : numericFilters
      .every((filter) => (
        getComparison(planet, filter.column, filter.comparison, filter.value, filter)))),
  ));

  const ascSortByColumn = (a, b) => (
    parseInt(a[Ordercolumn], 10) - parseInt(b[Ordercolumn], 10)
  );
  const dscSortByColumn = (b, a) => (
    parseInt(b[Ordercolumn], 10) - parseInt(a[Ordercolumn], 10));

  const sortByNumericValue = (planets) => {
    const sortTypes = {
      ASC: planets.filter(() => true).sort((a, b) => ascSortByColumn(a, b)),
      DSC: planets.filter(() => true).sort((a, b) => dscSortByColumn(b, a)),
    };

    return sortTypes[sort];
  };

  const ascSortByTextColumn = (a, b) => {
    if (a[Ordercolumn] > b[Ordercolumn]) {
      return 1;
    }
    if (a[Ordercolumn] < b[Ordercolumn]) {
      return negativeOne;
    }

    return zero;
  };

  const descSortByTextColumn = (a, b) => {
    if (a[Ordercolumn] > b[Ordercolumn]) {
      return negativeOne;
    }
    if (a[Ordercolumn] < b[Ordercolumn]) {
      return 1;
    }

    return zero;
  };

  const sortByText = (planets) => {
    const sortTypes = {
      ASC: planets.filter(() => true).sort((a, b) => ascSortByTextColumn(a, b)),
      DSC: planets.filter(() => true).sort((a, b) => descSortByTextColumn(a, b)),
    };
    return sortTypes[sort];
  };

  const sortPlanets = (planets) => {
    if (initialColumns.includes(Ordercolumn)) return sortByNumericValue(planets);
    return sortByText(planets);
  };

  const filterPlanets = (_planets) => {
    const filteredPlanetsByName = filterPlanetsByName(_planets);
    const filteredPlanetsByNumericValues = filterPlanetsByNumericValues(
      filteredPlanetsByName,
    );
    const sortedPlanets = sortPlanets(filteredPlanetsByNumericValues);

    return sortedPlanets;
  };

  const renderTableHeader = (planets) => (Object.keys(planets[0]))
    .filter((key) => key !== 'residents')
    .map((key) => <th key={ key }>{key}</th>);

  const renderTableFields = () => filterPlanets(data.results).map((planet, index) => (
    <tr key={ `planet ${index}` }>
      <td data-testid="planet-name">{planet.name}</td>
      {Object.keys(planet)
        .filter((key) => key !== 'residents' && key !== 'name')
        .map((key) => <td key={ planet[key] }>{planet[key]}</td>)}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          {renderTableHeader(data.results)}
        </tr>
      </thead>
      <tbody>
        {renderTableFields()}

      </tbody>

    </table>
  );
}
