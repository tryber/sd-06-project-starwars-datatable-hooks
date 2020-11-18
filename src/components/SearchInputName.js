import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInputName() {
  const { searchName, setSearchName } = useContext(StarWarsContext);
  return (
    <input
      type="text"
      name="search"
      data-testid="name-filter"
      onChange={ ({ target }) => setSearchName(target.value) }
      value={ searchName }
    />
  );
}

export default SearchInputName;
