import React, { useContext } from 'react';
import StarWarsContext from '../contexts/StarWarsContext';

function TableFilters() {
  const { setNameFilter } = useContext(StarWarsContext);
  return (
    <section>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Filter by Name"
        onChange={ (event) => setNameFilter(event.target.value) }
      />
    </section>
  );
}

export default TableFilters;
