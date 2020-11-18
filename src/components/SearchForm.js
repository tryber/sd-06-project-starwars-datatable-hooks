import React from 'react';

function SearchForm() {
  return (
    <div>
      <select data-testid="column-filter">
        <option selected>Selecione...</option>
        <option value="1">population</option>
        <option value="2">orbital_period</option>
        <option value="3">diameter</option>
        <option value="3">rotation_period</option>
        <option value="3">surface_water</option>
      </select>
      <select data-testid="comparison-filter">
        <option selected>Selecione...</option>
        <option value="1">maior que</option>
        <option value="2">menor que</option>
        <option value="3">igual a</option>
      </select>
      <input data-testid="value-filter" type="number" />
      <button data-testid="button-filter" type="button">Adicionar filtro</button>
    </div>

  );
}

export default SearchForm;

// population, orbital_period, diameter, rotation_period e surface_water
