import React, { useContext } from 'react';

import context from '../services/context/context';

const ShowFilterOptions = () => {
  const {
    applyNumberFilter,
    filterToApply,
    appliedFilters,
    removeFilter,
    availableFilters,
  } = useContext(context);

  const zero = 0;

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => {
          applyNumberFilter(target.value, '', zero, 'change');
        } }
        value={ filterToApply.columnType }
      >
        <option value="None">None</option>
        {availableFilters.map((column, i) => (
          <option key={ i } value={ column }>{ column }</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => {
          applyNumberFilter('', target.value, zero, 'change');
        } }
        value={ filterToApply.compareType }
      >
        {/* <option value="None">None</option> */}
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        onChange={ ({ target }) => {
          applyNumberFilter('', '', target.value, 'change');
        } }
        type="number"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          applyNumberFilter('', '', zero, 'add');
        } }
      >
        Que Seja
      </button>
      {appliedFilters.map((filter, index) => (
        <div key={ index }>
          <h4>{ filter.columnType }</h4>
          <button
            name={ filter.columnType }
            onClick={ (e) => removeFilter(e) }
            type="button"
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShowFilterOptions;
