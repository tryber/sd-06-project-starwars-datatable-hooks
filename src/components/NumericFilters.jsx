import React, { useState } from 'react';
import { FilterContext } from '../contexts/FilterContextProvider';

export const numericColumns = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
const comparisons = ['menor que', 'maior que', 'igual a'];
const inicialState = { column: 'population', comparison: 'maior que', value: 0 };

const repeatedOptionRemover = (selectedColumns) => {
  const columns = selectedColumns.map(({ column }) => column);
  return (numericColumns.filter((column) => columns.indexOf(column) < 0))
}

const NumericFilters = () => {
  const [filterCompiler, setFilterCompiler] = useState(inicialState);
  const { column, comparison, value } = filterCompiler;
  return (
    <FilterContext.Consumer>
      {({ setAllFilters, allFilters: { filters: { filterByName, filterByNumericValues, order } } }) => (
        <div>
        <select
          data-testid="column-filter"
          onChange={ ({ target: { value } }) => setFilterCompiler({...filterCompiler, column: value}) }
        >
          { repeatedOptionRemover(filterByNumericValues).map((numColumn) => (
            <option selected={ column === numColumn } key={numColumn}>{numColumn}</option>
          )) }
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ ({ target: { value } }) => setFilterCompiler({...filterCompiler, comparison: value}) }
        >
          { comparisons.map((arrayComparison) => (
            <option selected={arrayComparison === comparison} key={arrayComparison}>{arrayComparison}</option>
          )) }
        </select>
        <input
          type="number"
          data-testid="value-filter"
          value={ value }
          onChange={({ target: { value } }) => setFilterCompiler({...filterCompiler, value})}
        />
        <button
          data-testid="button-filter"
          onClick={() => setAllFilters({ filters: { filterByName, order,
            filterByNumericValues: [ ...filterByNumericValues, filterCompiler ] } })}
        >
          Filtrar
        </button>
      </div>
      )}
    </FilterContext.Consumer>
  );
};

export default NumericFilters;
