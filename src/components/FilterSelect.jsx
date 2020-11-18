import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterSelect() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(StarWarsContext);

  return (
    <main>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setFilterByNumericValues(
          [target.value, ...filterByNumericValues],
        ) }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select data-testid="comparison-filter">
        <option>maior que</option>
        <option>igual a</option>
        <option>menor que</option>
      </select>
      <input type="number" data-testid="value-filter" />
      <button type="button" data-testid="button-filter">Filtrar</button>
    </main>
  );
}

export default FilterSelect;
