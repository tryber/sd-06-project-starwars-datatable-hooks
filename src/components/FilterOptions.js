import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterOptions() {
  const { filters, setFilters } = useContext(StarWarsContext);

  const optionsArray = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  function handleClick() {
    const column = document.getElementById('column').value;
    const comparison = document.getElementById('comparison').value;
    const { value } = document.getElementById('value');
    const filterByNumericValues = {
      column,
      comparison,
      value,
    };
    setFilters({ ...filters, filterByNumericValues });
  }

  function handleResetFilters() {
    const filterByNumericValues = {
      column: '',
      comparison: '',
      value: '',
    };
    setFilters({ ...filters, filterByNumericValues });
  }

  return (
    <form>
      <select data-testid="column-filter" id="column">
        {optionsArray.map((key, index) => (
          <option
            key={ index }
            value={ key }
          >
            {key}
          </option>
        ))}
      </select>
      <select data-testid="comparison-filter" id="comparison">
        <option value="menor que">menor que</option>
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        id="value"
        placeholder="Insert number for comparison"
      />
      <button type="button" data-testid="button-filter" onClick={ handleClick }>
        Comparar
      </button>
      <button type="button" data-testid="filter" onClick={ handleResetFilters }>
        X
      </button>
    </form>
  );
}

export default FilterOptions;
