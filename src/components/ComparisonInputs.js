import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function ComparisonInputs() {
  const { column, value, comparison, setFilters, filters } = useContext(StarWarsContext);
  const [localColumn, setLocalColumn] = useState('');
  const [localComparison, setLocalComparison] = useState('');
  const [localValue, setLocalValue] = useState(0);

  const setLocalState = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          column: localColumn,
          comparison: localComparison,
          value: localValue,
        }
      ]
    });
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setLocalColumn(target.value) }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setLocalComparison(target.value) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        onChange={ ({ target }) => setLocalValue(target.value) }
      />
      <button
        data-testid="button-filter"
        onClick={ setLocalState }
      >
        Adicionar filtro
      </button>
      <p> { localColumn }</p>
      <p> { localComparison }</p>
      <p> { localValue }</p>
      <p> { column }</p>
      <p> { comparison }</p>
      <p> { value }</p>
    </div>
  );
}

export default ComparisonInputs;
