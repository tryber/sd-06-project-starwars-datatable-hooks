import React, { useContext } from 'react';

import StarWarsContext from '../context/StarWarsContext';

function SearchInput() {
  const { filters, setFilters } = useContext(StarWarsContext);

  return (
    <input
      data-testid="name-filter"
      type="text"
      name="search"
      id="search"
      onChange={ (ev) => setFilters(ev.target.value) }
      value={ filters }
    />
  );
}

export default SearchInput;
