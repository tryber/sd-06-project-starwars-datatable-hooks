import React, { useContext } from 'react';

import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { currentPlanets, tableHeaders } = useContext(StarWarsContext);
  return (
    <table>
      <thead>
        <tr>
          {
            tableHeaders.map((header) => <th key={ header }>{header}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          currentPlanets.map((element, index) => (
            <tr key={ index }>
              <td id={ `planet-${element.name}` }>
                { element.name }
              </td>
              <td id={ `planet-${element.name}-rotation-period` }>
                { element.rotation_period }
              </td>
              <td id={ `planet-${element.name}-orbital-period` }>
                { element.orbital_period }
              </td>
              <td id={ `planet-${element.name}-diameter` }>
                { element.diameter }
              </td>
              <td id={ `planet-${element.name}-climate` }>
                { element.climate }
              </td>
              <td id={ `planet-${element.name}-gravity` }>
                { element.gravity }
              </td>
              <td id={ `planet-${element.name}-terrain` }>
                { element.terrain }
              </td>
              <td id={ `planet-${element.name}-surface-water` }>
                { element.surface_water }
              </td>
              <td id={ `planet-${element.name}-population` }>
                { element.population }
              </td>
              <td id={ `planet-${element.name}-films` }>
                { element.films }
              </td>
              <td id={ `planet-${element.name}-created` }>
                { element.created }
              </td>
              <td id={ `planet-${element.name}-edited` }>
                { element.edited }
              </td>
              <td id={ `planet-${element.name}-url` }>
                { element.url }
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
