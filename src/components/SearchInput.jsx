import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInput() {
  const { searchTerm, setSearchTerm } = useContext(StarWarsContext).context;

  return (
    <div>
      <label htmlFor="search">
        Search the planet:
        <input
          data-testid="name-filter"
          type="text"
          name="search"
          id="search"
          onChange={ (event) => setSearchTerm(event.target.value) }
          value={ searchTerm }
        />
      </label>
    </div>
  );
}

export default SearchInput;
