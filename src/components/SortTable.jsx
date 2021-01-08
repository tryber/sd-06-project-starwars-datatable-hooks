import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function SortTable() {
  const {
    filters,
    setFilters,
    sortTableState,
    setSortTableState,
    orderState,
  } = useContext(StarWarsContext);

  function handleASC() {
    setSortTableState({ ...sortTableState, sort: 'ASC' });
  }
  function handleDESC() {
    setSortTableState({ ...sortTableState, sort: 'DESC' });
  }

  const handleColumn = (event) => {
    const newValue = event.target.value;
    setSortTableState({ ...sortTableState, column: newValue });
  };

  const handleClick = () => {
    setFilters({ ...filters, order: sortTableState });
  };

  return (
    <div>
      <span>Ordenar tabela:</span>
      <select
        data-testid="column-sort"
        onChange={ handleColumn }
        defaultValue="Escolha seu parâmetro de ordem"
      >
        <option disabled="disabled">Escolha seu parâmetro de ordem</option>
        { orderState
          .map((filtro) => (
            <option key={ orderState.indexOf(filtro) } value={ filtro }>
              { filtro }
            </option>)) }
      </select>

      <span>Ascedente:</span>
      <input
        type="radio"
        name="ordenation"
        onClick={ handleASC }
        data-testid="column-sort-input-asc"
        value="ASC"
      />
      <span>Descendente:</span>
      <input
        type="radio"
        name="ordenation"
        onClick={ handleDESC }
        data-testid="column-sort-input-desc"
        value="DESC"
      />
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleClick }
      >
        Ordenar
      </button>
    </div>
  );
}
