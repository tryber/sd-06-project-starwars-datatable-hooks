import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/starWarsContext';

function SecondFilter() {
  const { filterdColumn } = useContext(StarWarsContext);

  /*  function filterByFilter() {
    filterByNumericValues.forEach(({ column }) => {
      setFilteredColumn(filterOne.filter((el) => el !== column));
    });
  } */

  const filterTwo = [
    '',
    'maior que',
    'menor que',
    'igual a',
  ];
  const [column, setColumn] = useState();
  const [comparison, setComparison] = useState();
  const [value, setValue] = useState();

  if (filterdColumn) {
    return (
      <div>
        <label htmlFor="column">
          selecione uma coluna
          <select
            id="column"
            data-testid="column-filter"
            value={ column }
            onChange={ ({ target }) => setColumn(target.value) }
          >
            {filterdColumn.map((el, idx) => <option key={ idx }>{el}</option>)}
          </select>
        </label>
        <lable htmlFor="comparison">
          Selecione uma condição
          <select
            id="comparison"
            data-testid="comparison-filter"
            value={ comparison }
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
            value={ value }
            onChange={ ({ target }) => setValue(target.value) }
          />
        </lable>
        <button type="button" data-testid="button-filter">Filtrar</button>
      </div>
    );
  }
  return (<p />);
}

export default SecondFilter;
