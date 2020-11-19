import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const dropdown = [
  '',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const tiposComparacao = ['', 'maior que', 'menor que', 'igual a'];

const FilterNumeric = () => {
  const [localFilter, setLocalFilter] = useState(
    { column: '', comparison: '', value: '' },
  );

  const {
    returnAPI,
    filterNumber,
    setFilterNumber } = useContext(StarWarsContext);

  const dropFiltrado = filterNumber.map((filter) => filter.column);

  const dropNaoUsados = dropdown
    .filter((column) => !dropFiltrado.includes(column));

  const zero = 0;

  return (
    <div>
      {returnAPI.length !== zero && (
        <div>
          <select
            data-testid="column-filter"
            onChange={ (event) => setLocalFilter(
              { ...localFilter, column: event.target.value },
            ) }
          >
            {dropNaoUsados.map((column) => (
              <option key={ column } value={ column }>{column}</option>
            ))}
          </select>
          <select
            data-testid="comparison-filter"
            onChange={ (event) => setLocalFilter(
              { ...localFilter, comparison: event.target.value },
            ) }
          >
            {tiposComparacao.map((comparacao, index) => (
              <option key={ index } value={ comparacao }>{comparacao}</option>
            ))}
          </select>
          <input
            data-testid="value-filter"
            type="number"
            onChange={ (event) => setLocalFilter(
              { ...localFilter, value: event.target.value },
            ) }
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ () => setFilterNumber([...filterNumber, localFilter]) }
          >
            Filtrar
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterNumeric;
