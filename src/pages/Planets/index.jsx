import React, { useCallback, useRef, useState } from 'react';
import { FiX } from 'react-icons/fi';

import { usePlanets } from '../../hooks/planets';
import { availableNumericComparisons } from '../../hooks/utils/numericComparison';

import './styles.css';

function Planets() {
  const columnFilterRef = useRef();
  const comparisonFilterRef = useRef();
  const valueFilterRef = useRef();
  const [sortOption, setSortOption] = useState('name');
  const [sortOrder, setSortOrder] = useState('ASC');

  const {
    planets,
    loading,
    planetInfo,
    planetsSortOptions,
    nameFiltered,
    availableFilters,
    usedFilters,
    filterPlanetsByName,
    filterByNumerics,
    sortPlanets,
    removeFilter,
  } = usePlanets();

  const handleInputChange = useCallback(({ target }) => {
    filterPlanetsByName(target.value);
  }, [filterPlanetsByName]);

  const handleSort = useCallback(() => {
    sortPlanets(sortOption, sortOrder);
  }, [sortOption, sortOrder, sortPlanets]);

  const handleRadioChange = useCallback(({ target }) => {
    setSortOrder(target.value);
  }, []);

  const sortOptionChange = useCallback(({ target }) => {
    setSortOption(target.value);
  }, []);

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

    valueFilterRef.current.value = '';
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

        <div className="sort-container">
          <label htmlFor="column">Sort</label>
          <select
            name="column"
            id="column"
            data-testid="column-sort"
            value={ sortOption }
            onChange={ sortOptionChange }
            required
          >
            {planetsSortOptions.map((sortInfo, index) => (
              <option key={ `${sortInfo}-${index}` } value={ sortInfo }>
                {sortInfo}
              </option>
            ))}
          </select>

          <div className="ordering-sort-container">
            <div className="radio-container">
              <label htmlFor="ASC">Ascending</label>
              <input
                type="radio"
                name="sort"
                id="ASC"
                value="ASC"
                onChange={ handleRadioChange }
                data-testid="column-sort-input-asc"
              />
            </div>
            <div className="radio-container">
              <label htmlFor="DESC">Descending</label>
              <input
                type="radio"
                name="sort"
                id="DESC"
                value="DESC"
                onChange={ handleRadioChange }
                data-testid="column-sort-input-desc"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          data-testid="button-filter"
        >
          Filter
        </button>

        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ handleSort }
        >
          Sort
        </button>
      </form>

      {!!usedFilters.length && (
        <div className="used-filters-container">
          {usedFilters.map((filter, index) => (
            <div data-testid="filter" key={ `${filter}-${index}-${index}` }>
              <strong>{filter}</strong>
              <button type="button" onClick={ () => removeFilter(filter) }>
                <FiX size={ 20 } />
              </button>
            </div>
          ))}
        </div>
      )}

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
    </>
  );
}

export default Planets;
