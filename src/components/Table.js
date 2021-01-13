import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './TableCSS.css';

function Table() {
  const { planets, isLoading,
    filters:
    { order }, filters } = useContext(StarWarsContext);

  const filterComparison = (results) => {
    let resultFiltered = results;

    filters.filterByNumericValues.forEach((filter) => {
      const { column } = filter;
      const { valueComparison } = filter;

      if (filter.comparison === 'maior que') {
        resultFiltered = results
          .filter((planet) => Number(planet[column]) > Number(valueComparison));
      } else if (filter.comparison === 'menor que') {
        resultFiltered = results.filter((planet) => (
          Number(planet[column]) < Number(valueComparison)));
      } else if (filter.comparison === 'igual a') {
        resultFiltered = results.filter((planet) => (
          Number(planet[column]) === Number(valueComparison)));
      }
    });
    return resultFiltered;
  };

  const sortSelectedColumn = (a, b) => {
    let result;
    const lessOne = -1;

    const columnsWithNumbers = () => (order.column === 'rotation_period'
    || order.column === 'orbital_period' || order.column === 'surface_water'
    || order.column === 'diameter' || order.column === 'population');

    if (order.sort === 'ASC' && !columnsWithNumbers()) {
      result = (a[order.column] > b[order.column] ? 1 : lessOne);
    }
    if (order.sort === 'DESC' && columnsWithNumbers()) {
      result = (parseInt(a[order.column], 10) < parseInt(b[order.column], 10)
        ? 1 : lessOne);
    }
    if (order.sort === 'ASC' && columnsWithNumbers()) {
      result = (parseInt(a[order.column], 10) > parseInt(b[order.column], 10)
        ? 1 : lessOne);
    }
    if (order.sort === 'DESC' && !columnsWithNumbers()) {
      result = (a[order.column] < b[order.column] ? 1 : lessOne);
    }

    return result;
  };

  return (
    <div>
      { isLoading && 'Loading...' }
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          { filterComparison(planets)
            .filter((planet) => (
              planet.name.toLowerCase()
                .includes(filters.filterByName.name.toLowerCase())))
            .sort((a, b) => sortSelectedColumn(a, b))
            .map((planet) => (
              <tr key={ planet.name }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
