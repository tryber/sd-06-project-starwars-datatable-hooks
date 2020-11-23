import React, { useContext, useState } from 'react';

import StarWarsContext from '../context/StarWarsContext';

function FiltersInput() {
  const { filters, setFilters } = useContext(StarWarsContext);

  // itens para o filtro de coluna
  const columnFilter = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  // itens para o filtro de comparação
  const comparisonFilter = [
    'maior que',
    'igual a',
    'menor que',
  ];

  const ZERO = 0;
  // objeto para iniciar state local
  const LOCAL_OBJECTS = {
    column: 'population',
    comparison: 'maior que',
    value: ZERO,
  };

  const [numericValues, setNumericValues] = useState(LOCAL_OBJECTS);
  const [columnValues, setColumnValues] = useState(columnFilter);

  // função para lidar com as mudanças dos itens de forms
  // e atualizar estado global filterByName e estado local dos
  // filtros numéricos.
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    if (name === 'filterByName') {
      setFilters({
        [name]: {
          name: value,
        },
      });
    } else {
      setNumericValues({
        ...numericValues,
        [name]: value,
      });
    }
  };

  // função para lidar com o clique do botão
  // - remover colunas do array de nomes de coluna
  // - atualizar os filtros numéricos no estado global
  const handleClick = () => {
    const runningColumn = numericValues.column;
    const newColumnsValues = columnValues.filter((item) => item !== runningColumn);
    setColumnValues(newColumnsValues);

    if (!filters.filterByNumericValues) {
      setFilters({
        ...filters,
        filterByNumericValues: [numericValues],
      });
    } else {
      setFilters({
        ...filters,
        filterByNumericValues: [...filters.filterByNumericValues, numericValues],
      });
    }
  };

  return (
    <form>
      <label htmlFor="filterByName">
        Name:
        {' '}
        <input
          data-testid="name-filter"
          type="text"
          name="filterByName"
          onChange={ (e) => handleChange(e) }
        />
      </label>

      <label htmlFor="column">
        Numeric:
        {' '}
        <select
          data-testid="column-filter"
          name="column"
          onChange={ (e) => handleChange(e) }
        >
          {columnValues
            .map((selection) => (
              <option value={ selection } key={ selection }>
                { selection }
              </option>
            ))}
        </select>
      </label>

      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ (e) => handleChange(e) }
      >
        {comparisonFilter
          .map((entry) => (
            <option value={ entry } key={ entry }>
              { entry }
            </option>
          ))}
      </select>

      <input
        data-testid="value-filter"
        type="number"
        name="value"
        onChange={ (e) => handleChange(e) }
      />

      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }

      >
        Acionar Filtro
      </button>
    </form>
  );
}

export default FiltersInput;
