import React, { useState, useContext } from 'react';
import DataContext from '../context/DataContext';

export const numericColumnsOptions = [
  '',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisonOptions = ['', 'maior que', 'menor que', 'igual a'];

function FilterNumber() {
  const [localFilter, setLocalFilter] = useState(
    { column: '', comparison: '', value: '' },
  );

  const { dataApi,
    filterNumber,
    setFilterNumber,
  } = useContext(DataContext);

  const columnFilter = filterNumber.map((filter) => filter.column);

  const remainingColumns = numericColumnsOptions
    .filter((column) => !columnFilter.includes(column));

  const zero = 0;

  return (
    <div>
      {dataApi.length !== zero && (
        <div>
          <select
            data-testid="column-filter"
            onChange={ (e) => setLocalFilter(
              { ...localFilter, column: e.target.value },
            ) }
          >
            {remainingColumns.map((column) => (
              <option key={ column } value={ column }>{column}</option>
            ))}
          </select>
          <select
            data-testid="comparison-filter"
            onChange={ (e) => setLocalFilter(
              { ...localFilter, comparison: e.target.value },
            ) }
          >
            {comparisonOptions.map((eachComparison, index) => (
              <option key={ index } value={ eachComparison }>{eachComparison}</option>
            ))}
          </select>
          <input
            data-testid="value-filter"
            type="number"
            onChange={ (e) => setLocalFilter(
              { ...localFilter, value: e.target.value },
            ) }
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ () => setFilterNumber([...filterNumber, localFilter]) }
          >
            Filtrar
          </button>
        </div>
      )}
    </div>
  );
}

export default FilterNumber;
