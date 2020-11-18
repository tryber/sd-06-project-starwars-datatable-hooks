import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function FilterNumeric() {
  const {
    planetsData,
    filterProvider: { filterByNumericValues },
    setColumn,
    setValue,
    setComparison,
    segundoFiltro,
  } = useContext(StarWarsContext);

  function handleClick(event) {
    event.preventDefault();
    // referência: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_select_value2
    const column = document.getElementById('column-filter').value;
    const comparison = document.getElementById('comparison-filter').value;
    const value = document.getElementById('value-filter').value;
    const setNumericFilter = () => {
      setColumn(column);
      setComparison(comparison);
      setValue(value);
    };
    return setNumericFilter();
  }
  function handleColumnOptions() {
    const columns = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'];
    return columns.map((column) => (
      <option value={ column } key={ column }>
        {column}
      </option>));
  }
  return (
    <div>
      <select data-testid="column-filter" id="column-filter">
        {handleColumnOptions()}
      </select>
      <select data-testid="comparison-filter" id="comparison-filter">
        <option value="comparison">comparação</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input type="number" data-testid="value-filter" id="value-filter" />
      <button
        type="button"
        onClick={ (event) => {
          console.log('Chamou');
          handleClick(event);
          segundoFiltro(planetsData, filterByNumericValues);
        } }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterNumeric;
