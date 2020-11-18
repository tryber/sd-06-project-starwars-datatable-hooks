import React from 'react';

function SearchFilters() {
  const columns = ['population', 'orbital_period', 'diameter', 'rotation_period',
    'surface_water'];
  const comparisons = ['maior que', 'menor que', 'igual a'];
  return (
    <section>
      <label
        htmlFor="columnFilter"
      >
        Colunas
        <select
          data-testid="column-filter"
          id="columnFilter"
        >
          { columns.map((column) => (
          <option key={ column } value={ column }>{ column }</option>)) }
        </select>
      </label>
      <br/>
      <label
        htmlFor="comparisonFilter"
      >
        Comparação
        <select
          data-testid="comparison-filter"
          id="comparisonFilter"
        >
          { comparisons.map((comparison) => (
          <option key={ comparison } value={ comparison }>{ comparison }</option>)) }
        </select>
      </label>
      <br/>
      <label
        htmlFor="valueFilter"
      >
        Diâmetro
        <input
          type="number"
          id="valueFilter"
          data-testid="value-filter"
        />
      </label>
      <br/>
      <button data-tedid="button-filter">Filtrar</button>
      <br/>
      <br/>
    </section>
  )
}

export default SearchFilters;
