import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function ComparisonInputs() {
  const magic = 0
  const { setFilters, filters } = useContext(StarWarsContext);
  const [localColumn, setLocalColumn] = useState('');
  const [localComparison, setLocalComparison] = useState('');
  const [localValue, setLocalValue] = useState(magic);

  const setLocalState = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          column: localColumn,
          comparison: localComparison,
          value: localValue,
        },
      ],
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
        type="button"
        data-testid="button-filter"
        onClick={ setLocalState }
      >
        Adicionar filtro
      </button>
    </div>
  );
}

export default ComparisonInputs;
