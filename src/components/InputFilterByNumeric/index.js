import React, { useContext, useState } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

const columnFilters = [
  '',
  'rotation_period',
  'orbital_period',
  'diameter',
  'surface_water',
  'population',
];

const comparisonTypes = ['', 'maior que', 'igual a', 'menor que'];

function InputFilterByNumeric() {
  const { setFilterByNumbers } = useContext(StarWarsContext);
  const [local3Filters, setLocal3Filters] = useState({
    column: '',
    comparison: '',
    value: '' }); // aqui vão ser guarados os 3 filtros selecionados na página
    // para depois, através do onclick/filtrar serem salvos no estado global para
    // comparação e gerar o resultado esperado
  return (
    <>
      <select
        name="column-filter"
        id="column-filter"
        data-testid="column-filter"
        onChange={ (evento) => setLocal3Filters({
          ...local3Filters,
          column: evento.target.value,
        }) }
      >
        {columnFilters.map((filter) => (
          <option
            key={ filter }
            value={ filter }
          >
            {filter}
          </option>
        ))}
      </select>
      <select
        name="comparison-filter"
        id="comparison-filter"
        data-testid="comparison-filter"
        onChange={ (evento) => setLocal3Filters({
          ...local3Filters,
          comparison: evento.target.value,
        }) }
      >
        {comparisonTypes.map((comparison) => (
          <option
            key={ comparison }
            value={ comparison }
          >
            {comparison}
          </option>
        ))}
      </select>
      <input
        type="number"
        name="value-filter"
        id="value-filter"
        data-testid="value-filter"
        min={ 0.85 }
        step={ 0.01 }
        onChange={ (evento) => setLocal3Filters({
          ...local3Filters,
          value: evento.target.value,
        }) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => (setFilterByNumbers({ ...local3Filters })) }
      >
        Filtrar
      </button>
    </>
  );
}

export default InputFilterByNumeric;
