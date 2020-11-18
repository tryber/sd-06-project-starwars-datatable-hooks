import React from 'react';
import PlanetImages from '../data/planetImages';

function PlanetsTableBody({ planets, tableHeaders }) {
  console.log(PlanetImages);
  return (
    planets.map((planet) => (
      <tr key={ planet.name }>
        {tableHeaders.map((column) => (
          column === 'name'
            ? <td key={ planet.name + column } data-test-id="planet-name">
              {planet[column]}
              </td>
            : <td key={ planet.name + column }>
              {planet[column]}
              </td>
        ))}
      </tr>
    ))
  );
}

export default PlanetsTableBody;
