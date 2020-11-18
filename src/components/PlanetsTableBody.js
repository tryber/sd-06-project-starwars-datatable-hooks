import React from 'react';

function PlanetsTableBody({ planets, tableHeaders }) {
  return (
    planets.map((planet) => (
      <tr key={ planet.name }>
        {tableHeaders.map((column) => (
          column === 'name'
            ? <td key={ planet.name + column } data-testid="planet-name">
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
