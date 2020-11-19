import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NumericValuesFilter() {
  const { filterColumn, setFilterColumn } = useContext(StarWarsContext);

  const [columnFilter, setColumnFilter] = useState('');
  const [comparisonFilter, setComparisonFilter] = useState('');
  const [valueFilter, setValueFilter] = useState('');

  function handleColumnFilterChange(event) {
    const { selectedIndex } = event.nativeEvent.target.options;
    const columnValue = event.nativeEvent.target[selectedIndex].value;
    setColumnFilter(columnValue);
  }

  function handleComparisonFilterChange(event) {
    const { selectedIndex } = event.nativeEvent.target.options;
    const comparisonValue = event.nativeEvent.target[selectedIndex].value;
    setComparisonFilter(comparisonValue);
  }

  function handleValueFilterChange(event) {
    setValueFilter(event.target.value);
  }

  function handleButtonClick() {
    setFilterColumn([...filterColumn, {
      columnFilter,
      comparisonFilter,
      valueFilter,
    }]);
  }

  return (
    <main>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleColumnFilterChange }
      >
        <option value="">  </option>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ handleComparisonFilterChange }
      >
        <option value="">  </option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        data-testid="value-filter"
        type="Number"
        placeholder="Number"
        onChange={ handleValueFilterChange }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleButtonClick }
      >
        Add filter
      </button>
    </main>

  );
}

export default NumericValuesFilter;
