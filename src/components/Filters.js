import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { filters, setFilters } = useContext(StarWarsContext);
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        id="search-name"
        onChange={ (event) => setFilters(filters.filterByName.name(event.target.value)) }
        value={ filters.filterByName.name }
      />
    </div>
  );
}

export default Filters;
