import React, { useContext, useState } from 'react';
import StarWarsContext from '../contexts/StarWarsContext';

function TableFilters() {
  const {
    setNameFilter, setNumericFilters, filters: { filterByNumericValues },
  } = useContext(StarWarsContext);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

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
      return setColumn(selected);
    case 'comparison-filter':
      return setComparison(selected);
    default:
      return null;
    }
  }

  function handleButtonClick() {
    setNumericFilters([...filterByNumericValues, {
      column,
      comparison,
      value: parseInt(value, 10),
    }]);
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
          {columnFilter.map((filter) => (
            <option value={ filter } key={ filter }>
              { filter }
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
          onChange={ (event) => setValue(event.target.value) }
        />

        <button type="button" onClick={ handleButtonClick } data-testid="button-filter">
          Filter!
        </button>
      </div>
    </section>
  );
}

export default TableFilters;
