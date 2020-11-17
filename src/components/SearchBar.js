import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import SelectOption from './SelectOption';

function SearchBar() {
  const { setFilterByName } = useContext(StarWarsContext);
  return (
    <div>
      <input
        data-testid="name-filter"
        onChange={ (event) => setFilterByName(event.target.value) }
      />
      <SelectOption />
    </div>
  );
}

export default SearchBar;
