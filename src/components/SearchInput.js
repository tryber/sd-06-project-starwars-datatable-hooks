import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInput() {
  const { filters: { filterByName: { name } }, setFilterByName } = useContext(StarWarsContext);

  return (
    <input
      type="text"
      name="search"
      onChange={ (event) => setFilterByName(event.target.value) }
      value={ name }
      data-testid="name-filter"
    />
  );
}

export default SearchInput;
