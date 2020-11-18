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

  const columnFilter = filterNumber.map((filter) => filter.column);

  const remainingColumns = columnOptions
    .filter((column) => !columnFilter.includes(column));

  const zero = 0;

  return (
    <div>
      {console.log(filterNumber)}
      {console.log(columnFilter)}
      {console.log(remainingColumns)}
      {dataApi.length !== zero && (
        <div>
          <h4>Apply more filters:</h4>
          <select
            data-testid="column-filter"
            onChange={ (event) => setLocalFilter(
              { ...localFilter, column: event.target.value },
            ) }
          >
            {remainingColumns.map((column) => (
              <option key={ column } value={ column }>{column}</option>
            ))}
          </select>
          <select
            data-testid="comparison-filter"
            onChange={ (event) => setLocalFilter(
              { ...localFilter, comparison: event.target.value },
            ) }
          >
            {comparisonOptions.map((eachComparison, index) => (
              <option key={ index } value={ eachComparison }>{eachComparison}</option>
            ))}
          </select>
          <input
            data-testid="value-filter"
            type="number"
            onChange={ (event) => setLocalFilter(
              { ...localFilter, value: event.target.value },
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
};

export default FilterNumber;
