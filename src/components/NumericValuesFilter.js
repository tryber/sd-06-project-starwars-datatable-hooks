import React from 'react';
// import DropdownButton from 'react-bootstrap/DropdownButton';

function NumericValuesFilter() {
  return (
    <main>
      <select data-testid="column-filter">
        <option value="">  </option>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select data-testid="comparison-filter">
        <option value="">  </option>
        <option value="maior-que">maior que</option>
        <option value="menor-que">menor que</option>
        <option value="igual-a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="Number"
        placeholder="Number"
      />
      <button
        type="button"
        data-testid="button-filter"
      >
        Add filter
      </button>
    </main>

  );
}

export default NumericValuesFilter;
