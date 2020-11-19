import React, { useContext } from 'react';
import StarWarsContext from '../context/starWarsContext';

function TableFilters() {
  const { filters, deleteFilter } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;
  return (
    (filterByNumericValues[0] === undefined)
      ? <p className="no-filter">Nenhum Filtro</p>
      : filterByNumericValues.map((item) => (
        <p key={ item.column } data-testid="filter">
          { `Filtro: ${item.column} ${item.comparison} ${item.value}` }
          <button
            className="table-button"
            type="button"
            onClick={ () => deleteFilter(item.column) }
          >
            x
          </button>
        </p>
      ))
  );
}

export default TableFilters;
