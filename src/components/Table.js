import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const headersTitle = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate',
  'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films', 'URL', 'Created',
  'Edited'];

function Table() {
  const { data, loading, filterByName,
    filterNumbers: { filterByNumericValues } } = useContext(StarWarsContext);
  // const [namesFiltered, setNamesFiltered] = useState([]);
  // const [numberFiltered, setNumberFiltered] = useState([]);
  const [filter, setFilter] = useState(data);
  const lastFilterValue = filterByNumericValues.length - 1;
  const { column, comparison, value } = filterByNumericValues[lastFilterValue];

  useEffect(() => {
    const filteredNames = data
      .filter((planet) => planet.name.toLowerCase()
        .includes(filterByName.toLowerCase()));
    setFilter(filteredNames);
  }, [data, filterByName]);

  useEffect(() => {
    const filteredNumbers = data
      .filter((planet) => {
        if (comparison === 'maior que') {
          return Number(planet[column]) > Number(value);
        }
        if (comparison === 'menor que') {
          return Number(planet[column]) < Number(value);
        }
        if (comparison === 'igual a') {
          return Number(planet[column]) === Number(value);
        }
        return true;
      });
    setFilter(filteredNumbers);
  }, [filterByNumericValues]);

  return loading ? <div>LOADING...</div> : (
    <table>
      <thead>
        <tr>
          { headersTitle
            .map((header, index) => <th key={ index }>{header}</th>) }
        </tr>
      </thead>
      <tbody>
        { filter
          .map(({ name, rotation_period: rotationPeriod, orbital_period: orbitalPeriod,
            diameter, climate, gravity, terrain, surface_water: surfaceWater, population,
            created, edited, films, url },
          index) => (
            <tr key={ index }>
              <td>{ name }</td>
              <td>{ rotationPeriod }</td>
              <td>{ orbitalPeriod }</td>
              <td>{ diameter }</td>
              <td>{ climate }</td>
              <td>{ gravity }</td>
              <td>{ terrain }</td>
              <td>{ surfaceWater }</td>
              <td>{ population }</td>
              <td>{ films.length }</td>
              <td>{ url }</td>
              <td>{ created }</td>
              <td>{ edited }</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
