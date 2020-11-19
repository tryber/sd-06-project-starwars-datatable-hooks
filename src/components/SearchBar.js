import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/starWarsContext';

function SearchBar() {
  // === CONTEXTO LOCAL
  const INITIAL_NUMERIC_FILTERS = {
    column: '',
    comparison: '',
    value: '',
  };

  const [numericFilters, setNumericFilters] = useState({ ...INITIAL_NUMERIC_FILTERS });
  const { column, comparison, value } = numericFilters;
  const { filters, handleChangeName, newFilter } = useContext(StarWarsContext);

  const handleChangeNumeric = (key, valueField) => {
    setNumericFilters({ ...numericFilters, [key]: valueField });
  };

  const resetFilters = () => {
    setNumericFilters(INITIAL_NUMERIC_FILTERS);
  };

  const addFilter = () => {
    newFilter({ column, comparison, value });
    resetFilters();
  };

  // ===== CONTEXTO LOCAL

  const arrayAllColumns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  // Filtra os campos "column" que não foram acrescentados no filtro
  const myColumnsFilter = filters.filterByNumericValues.map((item) => item.column);
  const arrayColumnsFiltered = arrayAllColumns
    .filter((item) => !myColumnsFilter.includes(item));

  return (
    <div>
      <h1>Filtros</h1>

      {/* Campo para pesquisa pelo nome */}
      <input
        className="input-form"
        data-testid="name-filter"
        placeholder="Informe o nome"
        type="text"
        value={ filters.filterByName.name }
        onChange={ (e) => handleChangeName(e.target.value) }
      />

      {/* Dropdown para seleção do campo column */}
      <select
        className="input-form"
        data-testid="column-filter"
        value={ column === '' ? 'noSelect' : column }
        onChange={ (e) => handleChangeNumeric('column', e.target.value) }
      >
        <option disabled selected value="noSelect">-- Selecione uma opção --</option>
        { arrayColumnsFiltered.map((item, index) => (
          <option key={ index } value={ item }>{ item }</option>
        ))}
      </select>

      {/* Dropdown para seleção do campo comparison */}
      <select
        className="input-form"
        data-testid="comparison-filter"
        value={ comparison === '' ? 'noSelect' : comparison }
        onChange={ (e) => handleChangeNumeric('comparison', e.target.value) }
      >
        <option disabled selected value="noSelect">-- Selecione uma opção --</option>
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>

      {/* Campo para pesquisa pelo value */}
      <input
        className="input-form"
        data-testid="value-filter"
        placeholder="Informe o valor"
        type="text"
        value={ value }
        onChange={ (e) => handleChangeNumeric('value', e.target.value) }
      />

      {/* Botão para filtro */}
      <button
        className="button-form"
        data-testid="button-filter"
        type="button"
        onClick={ () => addFilter() }
      >
        Adicionar Filtro
      </button>
    </div>
  );
}

export default SearchBar;
