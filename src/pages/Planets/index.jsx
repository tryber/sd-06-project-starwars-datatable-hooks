import React, { useCallback, useRef, useState } from 'react';
import { FiX, FiFilter, FiAlignCenter } from 'react-icons/fi';

import Loading from '../../components/Loading';
import PlanetsTable from '../../components/PlanetsTable';

import renderFilterIcon from './utils/renderFIlterIcon';
import { usePlanets } from '../../hooks/planets';
import { availableNumericComparisons } from '../../hooks/utils/numericComparison';

import './styles.css';

function Planets() {
  const columnFilterRef = useRef();
  const comparisonFilterRef = useRef();
  const valueFilterRef = useRef();

  const {
    loading,
    planetsSortOptions,
    nameFiltered,
    sortSelected,
    availableFilters,
    usedFilters,
    filterPlanetsByName,
    filterByNumerics,
    sortPlanets,
    removeFilter,
  } = usePlanets();

  const [sortOption, setSortOption] = useState(sortSelected.column);
  const [sortOrder, setSortOrder] = useState(sortSelected.sort);

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
      <Loading />
    );
  }

  return (
    <div className="planets-page">
      <header className="app-header">
        <h1>Star Wars Planets</h1>
      </header>

      <div className="filter-container">
        <form onSubmit={ handleSubmit }>

          <h3>
            <FiFilter />
            Filter
          </h3>

          <div className="name-input-container">

            <input
              data-testid="name-filter"
              placeholder="Planet's name"
              value={ nameFiltered }
              onChange={ handleInputChange }
            />

          </div>

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

          <h3>
            <FiAlignCenter />
            Sort
          </h3>

          <div className="sort-container">
            <div className="sort-select-container">
              <select
                name="sort"
                id="sort"
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
            </div>

            <div className="ordering-sort-container">
              <div className="radio-container">
                <label htmlFor="ASC">Ascending</label>
                <input
                  type="radio"
                  name="sort"
                  id="ASC"
                  value="ASC"
                  onChange={ handleRadioChange }
                  checked={ sortOrder === 'ASC' }
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
                  checked={ sortOrder === 'DESC' }
                  onChange={ handleRadioChange }
                  data-testid="column-sort-input-desc"
                />
              </div>
            </div>
          </div>

          <div className="btn-container">
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

          </div>
        </form>

        {!!usedFilters.length && (
          <div className="used-filters-container">

            <h2>Active Filters</h2>

            {usedFilters.map((filter, index) => (
              <div data-testid="filter" key={ `${filter}-${index}-${index}` }>
                {renderFilterIcon(filter)}
                <strong>{filter}</strong>
                <button type="button" onClick={ () => removeFilter(filter) }>
                  <FiX size={ 20 } />
                </button>
              </div>
            ))}
          </div>
        )}

      </div>

      <PlanetsTable />

      <footer>
        <p>Developed by @fabiosc</p>
        <p>Contact me at fabiosenracorrea@gmail.com</p>
      </footer>

    </div>
  );
}

export default Planets;
