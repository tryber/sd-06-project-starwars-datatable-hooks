import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInput() {
  const { filters, setFilterByName } = useContext(StarWarsContext);
  const { filterByName } = filters;
  const { name } = filterByName;

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
