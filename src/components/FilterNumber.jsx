import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const columnOptions = [
  '',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];
const comparisonOptions = ['', 'maior que', 'menor que', 'igual a'];

const FilterNumber = () => {
  const [localFilter, setLocalFilter] = useState(
    { column: '', comparison: '', value: '' },
  );
  const { dataApi, filterNumber, setFilterNumber } = useContext(StarWarsContext);
  const columnFilters = filterNumber.map((filter) => filter.column);
  const remainingColumns = columnOptions
    .filter((column) => !columnFilters.includes(column));
  const zero = 0;
  return (
    <div>
      {dataApi.length !== zero && (
        <div>
          <h4>Apply more filters:</h4>
          <select
            data-testid="column-filter"
            onChange={ (e) => setLocalFilter({ ...localFilter, column: e.target.value }) }
          >
            {remainingColumns.map((c) => (
              <option key={ c } value={ c }>{c}</option>
            ))}
          </select>
          <select
            data-testid="comparison-filter"
            onChange={ (e) => setLocalFilter(
              { ...localFilter, comparison: e.target.value },
            ) }
          >
            {comparisonOptions.map((c) => (
              <option key={ c } value={ c }>{c}</option>
            ))}
          </select>
          <input
            data-testid="value-filter"
            type="number"
            onChange={ (e) => setLocalFilter({ ...localFilter, value: e.target.value }) }
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
};

export default FilterNumber;
