import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FormsFilter() {
  const { filters, setFilters } = useContext(StarWarsContext);
  const [formsFilter, setFormsFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  return (
    <fieldset>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setFormsFilter(
          { ...formsFilter, column: target.value },
        ) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setFormsFilter(
          { ...formsFilter, comparison: target.value },
        ) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        placeholder="Search By Value"
        onChange={ ({ target }) => setFormsFilter(
          { ...formsFilter, value: target.value },
        ) }
      />
      <button
        type="button"
        value="Filter"
        data-testid="button-filter"
        onClick={ () => setFilters({
          ...filters,
          filterByNumericValues: { ...formsFilter },
        }) }
      >
        Filter
      </button>
    </fieldset>
  );
}

export default FormsFilter;
