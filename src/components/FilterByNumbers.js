import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByNumbers() {
  const {
    setFilterNumericOptions,
    numericOptions,
  } = useContext(StarWarsContext);

  const zero = 0;

  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisionFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(zero);

  return (
    <section className="form-inline">
      <label className="navbar-brand" htmlFor="column-filter">
        Filter by:
        <select
          className="form-control"
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
        className="form-control"
        data-testid="comparison-filter"
        value={ comparisonFilter }
        onChange={ (ev) => setComparisionFilter(ev.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        className="form-control m-3"
        data-testid="value-filter"
        type="number"
        name="value-filter"
        value={ valueFilter }
        onChange={ (ev) => setValueFilter(ev.target.value) }
      />
      <button
        className="btn btn-outline-success my-2 my-sm-0"
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
