import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Inputs() {
  const { setNameFilter } = useContext(StarWarsContext);

  function handleInput({ target }) {
    setNameFilter(target.value);
  }

  return (
    <input
      type="text"
      placeholder="Filter planets by name"
      data-testid="name-filter"
      onChange={ handleInput }
    />
  );
}
