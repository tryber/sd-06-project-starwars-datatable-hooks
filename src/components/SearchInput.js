import React, { useContext } from 'react';
import starWarsContext from '../context/starWarsContext';

function SearchInput() {
  const { searchText, setSearchText } = useContext(starWarsContext);

  return (
    <input
      type="text"
      placholder="Search in The Table"
      data-testid="name-filter"
      onChange={ (event) => setSearchText(event.target.value) }
      value={ searchText }
    />

  );
}

export default SearchInput;
