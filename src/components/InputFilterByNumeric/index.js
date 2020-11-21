import React from 'react';

const columnFilters = [
  '',
  'rotation_period',
  'orbital_period',
  'diameter',
  'surface_water',
  'population',
];

const comparisonTypes = ['', 'maior que', 'menor que', 'igual a'];

function InputFilterByNumeric() {
  return (
    <>
      <select
        name="column-filter"
        id="column-filter"
        data-testid="column-filter"
      >
        {columnFilters.map((filter) => (
          <option key={ filter } value={ filter }>{filter}</option>
        ))}
      </select>
      <select
        name="comparison-filter"
        id="comparison-filter"
        data-testid="comparison-filter"
      >
        {comparisonTypes.map((comparison) => (
          <option key={ comparison } value={ comparison }>{comparison}</option>
        ))}
      </select>
      <input
        type="number"
        name="value-filter"
        id="value-filter"
        data-testid="value-filter"
        min={ 1 }
        step={ 0.1 }
      />
      <button
        type="button"
        data-testid="value-filter"
      >
        Filtrar
      </button>
    </>
  );
}

export default InputFilterByNumeric;
