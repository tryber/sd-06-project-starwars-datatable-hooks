import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInput() {
  const { searchTerm, setSearchTerm } = useContext(StarWarsContext);

  return (
    <input
      type="text"
      name="search"
      onChange={ (event) => setSearchTerm(event.target.value) }
      value={ searchTerm }
      data-testid="name-filter"
    />
  );
}

export default SearchInput;
