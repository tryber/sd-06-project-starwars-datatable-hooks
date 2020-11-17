import React, { useCallback, useRef } from 'react';

import { usePlanets } from '../../hooks/planets';
import { availableNumericComparisons } from '../../hooks/utils/numericComparison';

import './styles.css';

function Planets() {
  const columnFilterRef = useRef();
  const comparisonFilterRef = useRef();
  const valueFilterRef = useRef();

  const {
    planets,
    loading,
    planetInfo,
    nameFiltered,
    availableFilters,
    filterPlanetsByName,
    filterByNumerics,
  } = usePlanets();

  const handleInputChange = useCallback(({ target }) => {
    filterPlanetsByName(target.value);
  }, [filterPlanetsByName]);

  const handleSubmit = useCallback((formEvent) => {
    formEvent.preventDefault();

    const column = columnFilterRef.current.value;
    const comparison = comparisonFilterRef.current.value;
    const { value } = valueFilterRef.current;

    filterByNumerics({
      column,
      comparison,
      value,
    });
  }, [filterByNumerics]);

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <h1>Star Wars Planets</h1>

      <form onSubmit={ handleSubmit }>
        <input
          data-testid="name-filter"
          placeholder="name"
          value={ nameFiltered }
          onChange={ handleInputChange }
        />

        <div className="numeric-selectors-container">
          <div className="numeric-singleton-container">
            <label htmlFor="column">Column</label>
            <select
              name="column"
              id="column"
              data-testid="column-filter"
              ref={ columnFilterRef }
              required
            >
              {availableFilters.map((filter, index) => (
                <option key={ `${filter}-${index}` } value={ filter }>
                  {filter}
                </option>
              ))}
            </select>
          </div>

          <div className="numeric-singleton-container">
            <label htmlFor="comparison">Comparison</label>
            <select
              name="comparison"
              id="comparison"
              data-testid="comparison-filter"
              ref={ comparisonFilterRef }
              required
            >
              {availableNumericComparisons.map((comparison, index) => (
                <option key={ `${comparison}-${index}` } value={ comparison }>
                  {comparison}
                </option>
              ))}
            </select>
          </div>

          <div className="numeric-singleton-container">
            <label htmlFor="value">Value</label>
            <input
              data-testid="value-filter"
              placeholder="Valor"
              type="number"
              min={ 0 }
              step={ 1 }
              ref={ valueFilterRef }
              required
            />
          </div>
        </div>

        <button
          type="submit"
          data-testid="button-filter"
        >
          Filtrar
        </button>
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
