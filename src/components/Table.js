import React, { useContext } from 'react';
import StarWarsContext from '../context/starWarsContext';

function TablePlanets() {
  const { data, filters } = useContext(StarWarsContext);
  const { name } = filters.filterByName;
  // const { filterByNumericValues } = filters;
  // const initialNumber = 0;
  return (
    <div>
      <h1>Planets</h1>
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
          {data && data.filter((planet) => planet.name.toLowerCase()
            .includes(name.toLowerCase()))
            .filter((planet) => {
              if (filters.filterByNumericValues[0] !== undefined) {
                const { column, comparison, value } = filters.filterByNumericValues[0];
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
              }
              return true;
            })
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

// { data && data.filter((itemPlanet) => itemPlanet.name.includes(name))
//   .filter((itemPlanet) => {
//     if (filterByNumericValues[0] !== undefined) {
//       for (let i = initialNumber; i < filterByNumericValues.length; i += 1) {
//         const { column, comparison, value } = filterByNumericValues[i];
//         console.log(filterByNumericValues[i]);
//         switch (comparison) {
//         case 'maiorQue':
//           return parseInt(itemPlanet[column], 10) > parseInt(value, 10);
//         case 'menorQue':
//           return parseInt(itemPlanet[column], 10) < parseInt(value, 10);
//         case 'IgualA':
//           return parseInt(itemPlanet[column], 10) === parseInt(value, 10);
//         default:
//           return true;
//         }
//       }
//     }
//     return true;
//   })
//   .map((item, index) => (

export default TablePlanets;
