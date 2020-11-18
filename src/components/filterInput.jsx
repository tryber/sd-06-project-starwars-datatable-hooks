import React, { useContext } from 'react';
import { useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterInput() {
  const { filterByName, setFilterByName } = useContext(StarWarsContext);
  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={ ({ target }) => setFilterByName(target.value) }
      value={ filterByName }
    />
  );
}

export default FilterInput;
