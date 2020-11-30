import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function TextFilter() {
  const {
    textSearch,
    setTextSearch,
  } = useContext(StarWarsContext);

  return (
    <label htmlFor="text-input">
      Planet name:
      <input
        type="text"
        id="text-input"
        data-testid="name-filter"
        placeholder="Type planet name"
        onChange={ (event) => setTextSearch(event.target.value) }
        value={ textSearch }
      />
    </label>
  );
}

export default TextFilter;
