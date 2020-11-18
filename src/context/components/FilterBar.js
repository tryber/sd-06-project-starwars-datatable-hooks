import React, { useContext } from 'react';
import StarWarsContext from '../StarWarsContext';

function FilterBar() {
  const { handleFilterByName } = useContext(StarWarsContext);
  return (
    <div>
      <label htmlFor="filter-input">
        Busca por nome:
        <input
          data-testid="name-filter"
          id="filter-input"
          type="text"
          onChange={ (e) => handleFilterByName(e.target.value) }
        />
      </label>
    </div>
  );
}

export default FilterBar;
