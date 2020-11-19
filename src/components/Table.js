import React, { useContext } from 'react';
import StarWarsContext from '../context/starWarsContext';

function Table() {
  const { data, filters } = useContext(StarWarsContext);
  const { filterByName, filterByNumericValues } = filters;
  const initialNumber = 0;

  const verifyFilters = () => {
    let arrayFiltered = data;

    if (filterByName.name !== '') {
      arrayFiltered = arrayFiltered.filter((planet) => planet.name
        .toLowerCase().includes(filterByName.name.toLowerCase()));
    }
    if (filterByNumericValues[0] !== undefined) {
      for (let i = initialNumber; i < filterByNumericValues.length; i += 1) {
        arrayFiltered = arrayFiltered.filter((planet) => {
          const { column, comparison, value } = filters.filterByNumericValues[i];
          switch (comparison) {
          case 'maior que':
            return parseInt(planet[column], 10) > parseInt(value, 10);
          case 'menor que':
            return parseInt(planet[column], 10) < parseInt(value, 10);
          case 'igual a':
            return parseInt(planet[column], 10) === parseInt(value, 10);
          default:
            return true;
          }
        });
      }
    }
    return arrayFiltered;
  };

  return (
    <div>
      <h3>Planets</h3>
      <table className="table-container">
        <thead className="table-head">
          <tr>
            <th>Name</th>
            <th>Rotation</th>
            <th>Orbital</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface_water</th>
            <th>population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {data && verifyFilters()
            .map((item, index) => (
              <tr key={ index }>
                <td>{ item.name }</td>
                <td>{ item.rotation_period }</td>
                <td>{ item.orbital_period }</td>
                <td>{ item.diameter }</td>
                <td>{ item.climate }</td>
                <td>{ item.gravity }</td>
                <td>{ item.terrain }</td>
                <td>{ item.surface_water }</td>
                <td>{ item.population }</td>
                <td>{ item.films }</td>
                <td>{ item.created }</td>
                <td>{ item.edited }</td>
                <td>{ item.url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
