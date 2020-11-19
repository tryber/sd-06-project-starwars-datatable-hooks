import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/starWarsContext';

function SelectedFilter() {
  const filterOne = [
    '',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const filterTwo = [
    '',
    'maior que',
    'menor que',
    'igual a',
  ];
  const [column, setColumn] = useState();
  const [comparison, setComparison] = useState();
  const [value, setValue] = useState();

  const param = {
    column,
    comparison,
    value,
  };

  const { addFilter } = useContext(StarWarsContext);

  return (
    <div>
      <label htmlFor="column">
        selecione uma coluna
        <select
          id="column"
          data-testid="column-filter"
          onChange={ ({ target }) => setColumn(target.value) }
        >
          {filterOne.map((el, idx) => <option key={ idx }>{el}</option>)}
        </select>
      </label>
      <lable htmlFor="comparison">
        Selecione uma condição
        <select
          id="comparison"
          data-testid="comparison-filter"
          onChange={ ({ target }) => setComparison(target.value) }
        >
          {filterTwo.map((el, idx) => <option key={ idx }>{ el }</option>)}
        </select>
      </lable>
      <lable htmlFor="value">
        Digite um numero
        <input
          id="value"
          data-testid="value-filter"
          type="number"
          onChange={ ({ target }) => setValue(target.value) }
        />
      </lable>
      <button type="button" data-testid="button-filter" onClick={ () => addFilter(param) }>Filtrar</button>
    </div>
  );
}

export default SelectedFilter;
