import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function SearchFormNumber() {
  const {
    filters,
    setFilters,
    arrFilters,
    setArrFilters,
    searchNumState,
    setSearchNumState,
    deletedFilters,
    setDeletedFilters,
  } = useContext(StarWarsContext);

  const handleColumn = (event) => {
    const newValue = event.target.value;
    setSearchNumState({ ...searchNumState, column: newValue });
  };

  const handleComparison = (event) => {
    const newValue = event.target.value;
    setSearchNumState({ ...searchNumState, comparison: newValue });
  };

  const handleValue = (event) => {
    const newValue = event.target.value;
    setSearchNumState({ ...searchNumState, value: newValue });
  };

  const handleFilter = () => {
    setDeletedFilters([...deletedFilters, searchNumState.column]);
    setArrFilters(arrFilters.filter((elemento) => elemento !== searchNumState.column));
    setFilters({ ...filters, filterByNumericValues: [searchNumState] });
    document.getElementById('numberComparison').value = '';
  };

  return (
    <div>
      <span>Busca por Número:</span>
      <select
        data-testid="column-filter"
        onChange={ handleColumn }
        defaultValue="Escolha seu filtro"
      >
        <option disabled="disabled">Escolha seu filtro</option>
        { arrFilters
          .map((filtro) => (
            <option key={ arrFilters.indexOf(filtro) }>
              { filtro }
            </option>)) }
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ handleComparison }
        defaultValue="Escolha sua comparação"
      >
        <option disabled="disabled">Escolha sua comparação</option>
        <option>maior que</option>
        <option>igual a</option>
        <option>menor que</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        placeholder="ex:100"
        onChange={ handleValue }
        id="numberComparison"
        min="0"
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilter }
      >
        Filtrar
      </button>

    </div>
  );
}
