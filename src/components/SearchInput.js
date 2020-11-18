import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInput() {
  const { text, setText } = useContext(StarWarsContext);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">
        <input
          data-testid="name-filter"
          name="search"
          id="search"
          onChange={ (e) => handleChange(e) }
          value={ text }
        />
      </label>
    </div>
  );
}

export default SearchInput;
