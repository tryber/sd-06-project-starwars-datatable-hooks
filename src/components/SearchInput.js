import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInput() {
  const { searchTerm, setSearchTerm } = useContext(StarWarsContext).context;

  return (
    <input
      type="text"
      name="search"
      onChange={ (ev) => setSearchTerm(ev.target.value) }
      data-testid="name-filter"
      value={ searchTerm }
    />
  );
}

export default SearchInput;
