import React, { useState } from 'react';
import useFilters from '../hooks/useFilters';

import '../css/Header.css';

function Header() {
  const [filters, setFilters] = useFilters();

  const notEmpty = 0;
  const noEmptyFilters = filters.filters.filterByNumericValues.length > notEmpty;

  const usedColumns = filters.filters.filterByNumericValues.reduce(
    (array, curr) => [...array, curr.column], [],
  );
  const baseColumns = Object.keys(filters.filters.filterColumns);

  const enableColumns = baseColumns.reduce(
    (array, column) => (usedColumns.includes(column)
      ? array
      : [...array, [column, filters.filters.filterColumns[column]]]
    ),
    [],
  );

  const sortColumns = ['name', 'climate', 'terrain',
    'residents', 'films', 'created', 'url',
    'rotation_period', 'orbital_period', 'diameter',
    'gravity', 'surface_water', 'population'];

  const [currFilter, setCurrFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const [sort, setSort] = useState({
    column: 'name',
    sort: '',
  });

  function handleInput({ target }) {
    setFilters({
      ...filters,
      filters: {
        ...filters.filters,
        filterByName: {
          name: target.value,
        },
      },
    });
  }

  function handleComparison({ target }) {
    setCurrFilter({
      ...currFilter,
      [target.id]: target.value,
    });
  }

  function handleSort({ target }) {
    setSort({
      ...sort,
      [target.name]: target.value,
    });
  }

  function submitSorting() {
    if (sort.sort !== '') {
      setFilters({
        ...filters,
        filters: {
          ...filters.filters,
          order: sort,
        },
      });
    }
  }

  function submitComparison() {
    const validateForm = (currFilter.column !== 'default'
      && currFilter.comparison !== 'default'
      && currFilter.value !== '0');

    if (validateForm) {
      setFilters({
        ...filters,
        filters: {
          ...filters.filters,
          filterByNumericValues: [
            ...filters.filters.filterByNumericValues,
            {
              ...currFilter,
            },
          ],
        },
      });

      document.getElementById('comparison-form').reset();
      setCurrFilter({
        column: (enableColumns.length > 1) ? enableColumns[1][0] : '',
        comparison: 'maior que',
        value: '0',
      });
    }
  }

  function removeFilter({ target }) {
    const currFilters = filters.filters.filterByNumericValues.filter(
      (filter) => filter.column !== target.id,
    );
    setFilters({
      ...filters,
      filters: {
        ...filters.filters,
        filterByNumericValues: [
          ...currFilters,
        ],
      },
    });
  }

  return (
    <header className="header-wrapper">
      <section className="Header">
        <input
          type="text"
          placeholder="Digite para filtrar planetas pelo nome."
          onChange={ handleInput }
          data-testid="name-filter"
        />
        { enableColumns.length > notEmpty
          ? (
            <form id="comparison-form">
              <select
                id="column"
                onChange={ handleComparison }
                data-testid="column-filter"
              >
                { enableColumns.map((filter) => (
                  <option value={ filter[0] } key={ filter[0] }>
                    { filter[0] }
                  </option>
                )) }
              </select>
              <select
                id="comparison"
                onChange={ handleComparison }
                data-testid="comparison-filter"
              >
                <option value="maior que">maior que</option>
                <option value="menor que">menor que</option>
                <option value="igual a">igual a</option>
              </select>
              <input
                type="number"
                id="value"
                placeholder="valor"
                minvalue="0"
                onChange={ handleComparison }
                data-testid="value-filter"
              />
              <button
                type="button"
                onClick={ submitComparison }
                data-testid="button-filter"
              >
                Filtrar
              </button>
            </form>
          )
          : <span>Todos os filtros já foram ativados.</span>}
        <section className="sort-wrapper">
          <select data-testid="column-sort" name="column" onChange={ handleSort }>
            { sortColumns.map((filter) => (
              <option value={ filter } key={ filter }>
                { filter }
              </option>
            )) }
          </select>
          <div onChange={ handleSort }>
            <label htmlFor="ASC">
              <input
                type="radio"
                name="sort"
                id="ASC"
                value="ASC"
                data-testid="column-sort-input-asc"
              />
              Ascending
            </label>
            <label htmlFor="DESC">
              <input
                type="radio"
                id="DESC"
                name="sort"
                value="DESC"
                data-testid="column-sort-input-desc"
              />
              Descending
            </label>
          </div>
          <button
            type="button"
            onClick={ submitSorting }
            data-testid="column-sort-button"
          >
            Sort!
          </button>
        </section>
      </section>
      <section className="filters">
        { (noEmptyFilters)
        && filters.filters.filterByNumericValues.map(
          (filter) => (
            <p key={ filter.column } data-testid="filter" className="filter-bubble">
              { filter.column }
              <button
                type="button"
                className="remove-filter-btn"
                id={ filter.column }
                onClick={ removeFilter }
              >
                x
              </button>
            </p>
          ),
        )}
      </section>
    </header>
  );
}

export default Header;
