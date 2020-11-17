import React, { useContext, useEffect, useState } from 'react';
import FiltroOrdenado from './FiltroOrdenado';
import StarWarsContext from '../context/StarWarsContext';

// seleciona input de filtros por numeros e comparação
function selectParameter(event, setState, state) {
  setState({ ...state, [event.target.id]: event.target.value });
}

// botao para adicionar o filtro por numeros
function handleClick(event, state, setFilterByNumericValues) {
  const { column, comparison, value } = state;
  setFilterByNumericValues((e) => ([...e, { column, comparison, value }]));
}

// inputs de colunas, comparação e valor numerico
function seletores(selectedOption, state, setState) {
  return (
    <div>
      <select
        id="column"
        data-testid="column-filter"
        onChange={ (event) => { selectParameter(event, setState, state); } }
      >
        {selectedOption.map((element) => (
          <option value={ element } key={ element }>
            {element}
          </option>
        ))}
      </select>
      <select
        id="comparison"
        data-testid="comparison-filter"
        onChange={ (event) => selectParameter(event, setState, state) }
      >
        <option value="" disabled selected>
          Compare
        </option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        id="value"
        data-testid="value-filter"
        onChange={ (event) => selectParameter(event, setState, state) }
      />
    </div>
  );
}

const opcoes = [
  '',
  'population',
  'rotation_period',
  'diameter',
  'surface_water',
  'orbital_period',
];

function InputNumber() {
  const {
    options,
    setOptions,
    filterByNumericValues,
    setFilterByNumericValues,
  } = useContext(StarWarsContext);

  const [state, setState] = useState({ column: '', comparison: '', value: 0 });

  useEffect(() => {
    setOptions(filterByNumericValues.map((element) => element.column));
  }, [filterByNumericValues, setOptions]);

  let selectedOption = opcoes;
  selectedOption = selectedOption.filter((element) => !options.includes(element));
  return (
    <div>
      {seletores(selectedOption, state, setState)}
      <button
        type="button"
        data-testid="button-filter"
        onClick={ (e) => {
          handleClick(e, state, setFilterByNumericValues);
        } }
      >
        Adicionar Filtro
      </button>
      <FiltroOrdenado />
      {filterByNumericValues.map((filtro) => (
        <div key={ filtro.column } data-testid="filter">
          <button
            type="button"
            onClick={ function removeClick(event) {
              setFilterByNumericValues(
                filterByNumericValues.filter(
                  (filter) => filter.column !== event.target.id,
                ),
              );
            } }
            id={ filtro.column }
          >
            X
          </button>
          {filtro.column}
        </div>
      ))}
    </div>
  );
}

export default InputNumber;
