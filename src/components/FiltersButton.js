import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FiltersButton() {
  const { filters } = useContext(StarWarsContext);
  return (
    filters.filterByNumericValues.map((e, i) => (
      <div key={ i }>
        <span>
          {e.column}
          {' | '}
          {e.comparison}
          {' | '}
          {e.value}
        </span>
        <button
          type="button"
        >
          X
        </button>
      </div>
    ))
  );
}

export default FiltersButton;
