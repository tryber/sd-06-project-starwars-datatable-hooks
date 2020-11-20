import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInput() {
  const {
    filters: { filterByName: { name } },
    setFilterByName,
    setFilterByNumericValues,
    selectColumn,
    setSelectColumn,
    selectComparison,
    setSelectComparison,
    inputValue,
    setInputValue,
  } = useContext(StarWarsContext);

  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  return (
    <header className="">
      <input
        type="text"
        name="search"
        id="search"
        onChange={ (e) => setFilterByName(e.target.value) }
        data-testid="name-filter"
        value={ name }
        placeholder="Search By Name"
      />
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setSelectColumn(target.value) }
      >
        {columns.map((column, index) => (
          <option key={ index } value={ column }>{column}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setSelectComparison(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        placeholder="Digite um número"
        name="valueNumber"
        value={ inputValue }
        onChange={ ({ target }) => setInputValue(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={
          () => setFilterByNumericValues(selectColumn, selectComparison, inputValue)
        }
      >
        Filter
      </button>
    </header>
  );
}

export default SearchInput;
