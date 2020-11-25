import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const { setFilterByName, setFilterByNumber, filters } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    setFilterByName(target.value);
  };
  const handleClick = () => {
    const columnSelect = document.getElementById('column').value;
    const comparisonSelect = document.getElementById('comparison').value;
    const numberTyped = document.getElementById('number').value;
    const filterCreation = { column: columnSelect,
      comparison: comparisonSelect,
      value: numberTyped,
    };
    setFilterByNumber(filterCreation);
  };
  const setOptions = () => {
    let colunmOptions = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
    //Lógica das linhas 24 a 27 com a ajuda da Ana Capdeville
    const filteredOptions = filters.filterByNumericValues
      .map((filter) => Object.values(filter)[0]);

    colunmOptions = colunmOptions.filter((columnOption) => !filteredOptions.includes(columnOption));

    return colunmOptions;
  };

  return (
    <div>
      <input onChange={ handleChange } data-testid="name-filter" />
      <div data-testid="filter">
        <select data-testid="column-filter" id="column">
          <option hidden value="">Selecione</option>
          {setOptions()
            .map((option) => <option value={ option } key={ option }>{option}</option>)}
        </select>
        <select data-testid="comparison-filter" id="comparison">
          <option hidden value="">Selecione</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input data-testid="value-filter" type="number" id="number" />
        <button type="button">X</button>
      </div>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filtrar
      </button>
      { filters.filterByNumericValues.map((filter, index) => (
        <div>
          <span key={ index }>
          { filter.column } { filter.comparison } { filter.value }
          </span>
          <br />
        </div>
      ))}
    </div>

  );
}

export default Filter;
