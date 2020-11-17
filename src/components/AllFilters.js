import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function AllFilters() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(
    StarWarsContext,
  );

  function hC(e) {
    // Uma cópia de filtros apenas para não fazer alteração na base
    const filtrosCopia = [...filterByNumericValues];
    const filtrosFinal = filterByNumericValues.map((filt) => filt.column);
    filtrosCopia.splice(filtrosFinal.indexOf(e.target.id), 1);
    setFilterByNumericValues(filtrosCopia);
  }
  // prettier-ignore
  return (
    <div>
      {filterByNumericValues.map((filt) => (
        <div key={ filt.column } data-testid="filter">
          {`${filt.column} ${filt.comparison} ${filt.value}`}
          <button
            type="button"
            id={ filt.column }
            onClick={ (e) => hC(e) }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default AllFilters;
