import React, { useContext, useState } from 'react';
import StarWarsContext from '../contexts/StarWarsContext';

function TableFilters() {
  const { setNameFilter } = useContext(StarWarsContext);
  const [columnToFilter, setColumnToFilter] = useState('');
  const [comparisonFilter, setComparisonFilter] = useState('');
  const [valueFilter, setValueFilter] = useState('');

  const columnFilter = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const comparisonFilters = [
    'maior que', 'menor que', 'igual a',
  ];

  function handleColumnSelect(event) {
    const { selectedIndex } = event.nativeEvent.target.options;
    const selected = event.nativeEvent.target[selectedIndex].value;

    switch (event.target.name) {
    case 'column-filter':
      return setColumnToFilter(selected);
    case 'comparison-filter':
      return setComparisonFilter(selected);
    default:
      return null;
    }
  }

  return (
    <section>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Filter by Name"
        onChange={ (event) => setNameFilter(event.target.value) }
      />
      <div className="column-filter-selector">
        <select
          onChange={ handleColumnSelect }
          data-testid="column-filter"
          name="column-filter"
        >
          <option selected disabled>-- Filter property --</option>
          {columnFilter.map((column) => (
            <option value={ column } key={ column }>
              { column }
            </option>
          ))}
        </select>

        <select
          onChange={ handleColumnSelect }
          data-testid="comparison-filter"
          name="comparison-filter"
        >
          <option selected disabled>-- Comparison filter --</option>
          {comparisonFilters.map((statement) => (
            <option key={ statement } value={ statement }>
              {statement}
            </option>
          ))}
        </select>

        <input
          type="number"
          data-testid="value-filter"
          placeholder="Filter by value"
          onChange={ (event) => setValueFilter(event.target.value) }
        />

        <button type="button">
          Filter!
        </button>
      </div>
    </section>
  );
}

export default TableFilters;
