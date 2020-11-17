import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInput() {
  const { searchTerm, setSearchTerm } = useContext(StarWarsContext).context;

  return (
    <input
      type="text"
      name="search"
      onChange={ (ev) => setSearchTerm(ev.target.value) }
      value={ searchTerm }
    />
  );
}

export default SearchInput;
