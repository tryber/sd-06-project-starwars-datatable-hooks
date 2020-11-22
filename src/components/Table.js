/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import FilterTable from './FilterTable';

function Table() {
  const {
    data,
    getData,
    dataFilter,
  } = useContext(StarWarsContext);

  useEffect(() => {
    getData();
  }, []);

  const headTitle = [
    'Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate', 'Gravity',
    'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'URL',
  ];
  const filterNumericValues = () => {
    let filteredPlanetsByNumber = data;
    dataFilter.filters.filterByNumericValues.forEach(({ column, comparison, value }) => {
      switch (comparison) {
      case 'maior que':
        filteredPlanetsByNumber = data.filter((planet) => (
          planet[column] > parseInt(value, 10)));
        break;
      case 'menor que':
        filteredPlanetsByNumber = data.filter((planet) => (
          planet[column] < parseInt(value, 10)));
        break;
      case 'igual a':
        filteredPlanetsByNumber = data.filter((planet) => (
          planet[column] === value));
        break;
      default:
        return filteredPlanetsByNumber;
      }
    });
    return filteredPlanetsByNumber;
  };

  return (
    <div>
      <FilterTable />
      <table>
        <thead>
          <tr>
            {headTitle.map((title, index) => (
              <th key={ index }>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filterNumericValues()
            .filter((input) => input.name.toLowerCase()
              .includes(dataFilter.filters.filterByName.name.toLowerCase()))
            .map((planet, index) => (
              <tr key={ index }>
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
