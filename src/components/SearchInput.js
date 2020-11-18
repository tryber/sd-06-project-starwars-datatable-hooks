import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInput() {
  const { text, setText } = useContext(StarWarsContext);

  return (
    <div>
      <label htmlFor="search">
        <input
          name="search"
          id="search"
          onChange={ (e) => setText(e.target.value) }
          value={ text }
        />
      </label>
    </div>
  );
}

export default SearchInput;
