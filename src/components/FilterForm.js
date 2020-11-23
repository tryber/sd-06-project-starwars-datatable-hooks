import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterForm() {
  const { setName, setColumn, setComparison, setValue } = useContext(StarWarsContext);

  const handleFilter = () => {
    const text = document.getElementsByTagName('input')[0].value;

    setName(text);
  };

  const handleSelect = () => {
    const selects = document.getElementsByTagName('select');
    const column = selects[0].value;
    const comparison = selects[1].value;
    const value = document.getElementById('number');

    setColumn(column);
    setComparison(comparison);
    setValue(value.value);
  };

  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleFilter }
      />
      <select data-testid="column-filter">
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select data-testid="comparison-filter">
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input type="number" id="number" data-testid="value-filter" />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleSelect }
      >
        Adicionar Filtro
      </button>
    </form>
  );
}

export default FilterForm;
