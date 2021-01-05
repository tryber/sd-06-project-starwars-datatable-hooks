import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Filter() {
  const { setNameFilter, setNumericFilter } = useContext(StarWarsContext);

  function handleChange(e) {
    setNameFilter(e.target.value);
  }

  function handleSelect() {
    const selectedColumn = document.getElementById('column').value;
    const selectedComparison = document.getElementById('comparison').value;
    const selectedValue = document.getElementById('value').value;
    const selectedFilter = {
      column: selectedColumn,
      comparison: selectedComparison,
      number: selectedValue,
    };
    setNumericFilter(selectedFilter);
  }

  function eraseFilter() {
    const selectedFilter = {
      column: '',
      comparison: '',
      number: '',
    };
    setNumericFilter(selectedFilter);
  }

  return (
    <>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ handleChange }
      />

      <div data-testid="filter">
        <select data-testid="column-filter" id="column">
          <option value="">Selecione</option>
          <option value="population" key="population">population</option>
          <option value="orbital_period" key="orbital_period">orbital_period</option>
          <option value="diameter" key="diameter">diameter</option>
          <option value="rotation_period" key="rotation_period">rotation_period</option>
          <option value="surface_water" key="surface_water">surface_water</option>
        </select>

        <select data-testid="comparison-filter" id="comparison">
          <option value="">Selecione</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input
          data-testid="value-filter"
          type="number"
          id="value"
        />
        <button
          data-testid="filter"
          type="button"
          onClick={ eraseFilter }
        >
          X
        </button>
      </div>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleSelect }
      >
        Find What You Lookin For
      </button>
    </>
  );
}
