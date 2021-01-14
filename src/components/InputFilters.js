import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputFilters() {
  const { contexts } = useContext(StarWarsContext);
  const {
    filters: { filterByName: { name } },
    comparison,
    setComparison,
    wichColumn,
    setWichColumn,
    filterNumber,
    setFilterNumber,
    filteringName,
    numericValuesFilter,
  } = contexts;

  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  return (
    <header>
      <input
        type="text"
        name="search"
        data-testid="name-filter"
        value={ name }
        placeholder="Digite o nome do Planeta"
        onChange={ (event) => filteringName(event.target.value) }
      />
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setWichColumn(target.value) }
      >
        {columns.map((column, index) => (
          <option key={ index } value={ column }>{column}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="inputNumber"
        placeholder="Digite um número"
        value={ filterNumber }
        onChange={ ({ target }) => setFilterNumber(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => numericValuesFilter(
          wichColumn, comparison, filterNumber,
        ) }
      >
        Filtrar
      </button>
    </header>
  );
}

export default InputFilters;
