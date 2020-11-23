import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByNumbers() {
  const {
    setFilterNumericOptions,
  } = useContext(StarWarsContext);

  const zero = 0;
  const numericOptions = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];

  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisionFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(zero);

  return (
    <section>
      <label htmlFor="column-filter">
        Filter by:
        <select
          data-testid="column-filter"
          id="column-filter"
          value={ columnFilter }
          onChange={ (ev) => setColumnFilter(ev.target.value) }
        >
          {numericOptions.map((option, index) => (
            <option key={ index } value={ option }>{option}</option>
          ))}
        </select>
      </label>
      <select
        data-testid="comparison-filter"
        value={ comparisonFilter }
        onChange={ (ev) => setComparisionFilter(ev.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value-filter"
        value={ valueFilter }
        onChange={ (ev) => setValueFilter(ev.target.value) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => setFilterNumericOptions(
          columnFilter, comparisonFilter, valueFilter,
        ) }
      >
        Filter
      </button>
    </section>
  );
}

export default FilterByNumbers;
