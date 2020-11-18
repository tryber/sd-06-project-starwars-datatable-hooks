import React from 'react';

import { usePlanets } from '../../hooks/planets';

import './styles.css';

function PlanetsTable() {
  const { planetInfo, planets } = usePlanets();

  return (
    <div className="planet-table-container">
      <table>
        <thead>
          <tr>
            {planetInfo.map((header, index) => (
              <th key={ `${header}-${index}` }>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {planets.map((planet) => (
            <tr key={ `${planet.url}-${Math.random()}` }>
              {planetInfo.map((header) => (
                <td
                  key={ `${planet.name}-${header}` }
                  data-testid={ header === 'name' ? 'planet-name' : '' }
                >
                  {
                    planet[header]
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlanetsTable;
