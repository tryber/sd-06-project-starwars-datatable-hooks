import React from 'react';

function PlanetsTableBody({ planets, tableHeaders }) {
  return (
    planets.map((planet) => (
      <tr key={ planet.name }>
        {tableHeaders.map((column) => (
          <td key={ planet.name + column }>
            {planet[column]}
          </td>
        ))}
      </tr>
    ))
  );
}

export default PlanetsTableBody;
