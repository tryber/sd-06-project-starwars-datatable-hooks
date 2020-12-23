import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function ComparisonInputs() {
  const magic = 0;
  // const { data } = useContext(StarWarsContext);
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
  const reset = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: '',
        },
      ],
    });
    setLocalColumn('');
    setLocalComparison('');
    setLocalValue('');
  };

  return (
    <div data-testid="filter">
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setLocalColumn(target.value) }
        value={ localColumn }
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
        value={ localComparison }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        onChange={ ({ target }) => setLocalValue(target.value) }
        value={ localValue }
      />
      <button
        data-testid="filter"
        type="button"
        onClick={ () => reset() }
      >
        X
      </button>
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
