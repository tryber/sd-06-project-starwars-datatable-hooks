import React from 'react';

function NumericFilter() {
  const columnFilters = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water',
  ];
  const comparisonFilters = ['maior que', 'menor que', 'igual a'];

  return (
    <div>
      <label htmlFor="column-filter">
        Column Filter:
        <select id="column-filter" data-testid="column-filter">
          {columnFilters.map((category, index) => (
            <option key={ index }>{ category }</option>
          ))}
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Filter by:
        <select id="comparison-filter" data-testid="comparison-filter">
          {comparisonFilters.map((comparison, index) => (
            <option key={ index }>{ comparison }</option>
          ))}
        </select>
      </label>
      <label htmlFor="value-filter">
        Value:
        <input type="number" id="value-filter" data-testid="value-filter" />
      </label>
      <button type="submit" data-testid="button-filter">Apply Filter</button>
    </div>
  );
}

export default NumericFilter;
