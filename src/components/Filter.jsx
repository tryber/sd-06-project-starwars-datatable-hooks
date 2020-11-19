import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const { setFilterByName, setFilterByNumber } = useContext(StarWarsContext);
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
  const colunmOptions = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];

  return (
    <div>
      <input onChange={ handleChange } data-testid="name-filter" />
      <div data-testid="filter">
        <select data-testid="column-filter" id="column">
          <option hidden value="">Selecione</option>
          {colunmOptions
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
    </div>

  );
}

export default Filter;
