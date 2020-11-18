import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function ComparisonInput() {
  const { filters, setFilters } = useContext(StarWarsContext).context;

  const [localColumn, setLocalColumn] = useState('');
  const [localComparison, setLocalComparison] = useState('');
  const [localValue, setLocalValue] = useState(0);

  const setLocalState = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [{
        column: localColumn,
        comparison: localComparison,
        value: localValue,
      }],
    });
  };

  return (
    <div>
      <select 
        onChange={ ({ target }) => setLocalColumn(target.value) }
        data-testid="column-filter"
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select 
        onChange={ ({ target }) => setLocalComparison(target.value) }
        data-testid="comparison-filter"
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        onChange={ ({ target }) => setLocalValue(target.value) }
        data-testid="value-filter" type="number"
      />
      <button onClick={setLocalState} data-testid="button-filter">
        Adicionar filtro
      </button>
    </div>
  );
}

export default ComparisonInput;
