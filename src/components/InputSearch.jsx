import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputSearch() {
  const { name, setName } = useContext(StarWarsContext);
  return (
    <input
      type="text"
      data-testid="name-filter"
      name="text"
      value={ name }
      onChange={ ({ target }) => setName(target.value) }
    />
  );
}

export default InputSearch;
