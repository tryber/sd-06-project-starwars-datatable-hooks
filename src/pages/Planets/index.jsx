import React, { useMemo, useCallback, useState } from 'react';

import { usePlanets } from '../../hooks/planets';

import './styles.css';

function Planets() {
  const [nameFilter, setNameFilter] = useState('');

  const { planets, filterPlanets, loading, planetInfo } = usePlanets();

  const handleInputChange = useCallback(({ target }) => {
    setNameFilter(target.value);
    filterPlanets(target.value);
  }, [filterPlanets]);

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <h1>Star Wars Planets</h1>

      <form>
        <input
          data-testid="name-filter"
          placeholder="name"
          value={ nameFilter }
          onChange={ handleInputChange }
        />
      </form>

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
              <tr key={ planet.url }>
                {planetInfo.map((header) => (
                  <td key={ `${planet.name}-${header}` }>
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
    </>
  );
}

export default Planets;
