import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

// Funções para os valor numéricos
function NumericValuesFilter() {
  const { filterColumn, setFilterColumn } = useContext(StarWarsContext);

  const [columnFilter, setColumnFilter] = useState('');
  const [comparisonFilter, setComparisonFilter] = useState('');
  const [valueFilter, setValueFilter] = useState('');

  // Função para selecionar coluna
  function handleColumnFilterChange(event) {
    const { selectedIndex } = event.nativeEvent.target.options;
    const columnValue = event.nativeEvent.target[selectedIndex].value;
    setColumnFilter(columnValue);
  }

  // Função para selecionar valor comparação
  function handleComparisonFilterChange(event) {
    const { selectedIndex } = event.nativeEvent.target.options;
    const comparisonValue = event.nativeEvent.target[selectedIndex].value;
    setComparisonFilter(comparisonValue);
  }

  // Função para receber valor numérico
  function handleValueFilterChange(event) {
    setValueFilter(event.target.value);
  }

  // Função para adicionar/rendenrizar o filtro
  function handleButtonClick() {
    setFilterColumn([...filterColumn, {
      columnFilter,
      comparisonFilter,
      valueFilter,
    }]);
  }

  // Fução que remove o filtro, redenderizando a tela ao estado inicial
  function handleRemoveFilter() {
    setFilterColumn(
      {
        columnFilter,
        comparisonFilter,
        valueFilter,
      },
    );
  }

  return (
    <main>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleColumnFilterChange }
      >
        <option data-testid="filter" value="">  </option>
        <option data-testid="filter" value="population">population</option>
        <option data-testid="filter" value="orbital_period">orbital_period</option>
        <option data-testid="filter" value="diameter">diameter</option>
        <option data-testid="filter" value="rotation_period">rotation_period</option>
        <option data-testid="filter" value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ handleComparisonFilterChange }
      >
        <option data-testid="filter" value="">  </option>
        <option data-testid="filter" value="maior que">maior que</option>
        <option data-testid="filter" value="menor que">menor que</option>
        <option data-testid="filter" value="igual a">igual a</option>
      </select>

      <input
        data-testid="value-filter"
        type="Number"
        placeholder="Number"
        onChange={ handleValueFilterChange }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleButtonClick }
      >
        Add filter
      </button>

      <button
        type="button"
        onClick={ handleRemoveFilter }
        data-testid="filter"
      >
        X
      </button>
    </main>

  );
}

export default NumericValuesFilter;
