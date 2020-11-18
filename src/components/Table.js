import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Table() {
  const { data,
    isLoading,
    name,
    numericFilters,
  } = useContext(StarWarsContext);

  const zero = 0;

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

  const filterPlanets = (_planets) => {
    const filteredPlanetsByName = filterPlanetsByName(_planets);
    const filteredPlanetsByNumericValues = filterPlanetsByNumericValues(
      filteredPlanetsByName,
    );

    return filteredPlanetsByNumericValues;
  };

  const getTableHeaders = (planets) => (Object.keys(planets[0]))
    .filter((key) => key !== 'residents')
    .map((key) => <th key={ key }>{key}</th>);

  const getTableFields = () => filterPlanets(data.results).map((planet, index) => (
    <tr key={ `planet ${index}` }>
      {Object.keys(planet)
        .filter((key) => key !== 'residents')
        .map((key) => <td key={ planet[key] }>{planet[key]}</td>)}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          {getTableHeaders(data.results)}
        </tr>
      </thead>
      <tbody>
        {getTableFields()}

      </tbody>

    </table>
  );
}
