import React, { useState } from 'react';
import useFilters from '../hooks/useFilters';

import '../css/Header.css';

function Header() {
  const [filters, setFilters] = useFilters();
  const [currFilter, setCurrFilter] = useState({
    column: 'default',
    comparison: 'default',
    value: '0',
  });
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

  function submitComparisonFilter() {
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
    }
  }

  return (
    <header className="Header">
      <input
        type="text"
        placeholder="Digite para filtrar planetas pelo nome."
        onChange={ handleInput }
        data-testid="name-filter"
      />
      <form id="comparison-form">
        <select data-testid="column-filter" id="column" onChange={ handleComparison }>
          { enableColumns.map((filter) => (
            <option value={ filter[0] } key={ filter[0] }>
              { filter[1] }
            </option>
          )) }
        </select>
        <select
          id="comparison"
          onChange={ handleComparison }
          data-testid="comparison-filter"
        >
          <option value="default">Comparação</option>
          <option value="Maior que">Maior que</option>
          <option value="Menor que">Menor que</option>
          <option value="Igual a">Igual a</option>
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
          onClick={ submitComparisonFilter }
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </form>
    </header>
  );
}

export default Header;
