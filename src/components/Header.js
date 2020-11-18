import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Header() {
  const [filter1, setFilter1] = useState('');
  const [filter2, setFilter2] = useState('');
  const [filter3, setFilter3] = useState('');
  const { handleChange, handleFilter } = useContext(PlanetsContext);

  function headerHandleChange({ target }) {
    if (target.name === 'filter-1') setFilter1(target.value);
    else if (target.name === 'filter-3') setFilter3(target.value);
    else if (target.name === 'filter-2') {
      if (target.value === 'maior que') setFilter2('>');
      else if (target.value === 'menor que') setFilter2('<');
      else if (target.value === 'igual a') setFilter2('===');
    }
  }

  return (
    <div>
      <input onChange={ handleChange } data-testid="name-filter" />
      <select name="filter-1" data-testid="column-filter" onChange={ headerHandleChange }>
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        name="filter-2"
        data-testid="comparison-filter"
        onChange={ headerHandleChange }
      >
        <option>Selecione...</option>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        name="filter-3"
        data-testid="value-filter"
        type="number"
        onChange={ headerHandleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleFilter(filter1, filter2, filter3) }
      >
        Filtrar
      </button>
    </div>
  );
}

export default Header;
