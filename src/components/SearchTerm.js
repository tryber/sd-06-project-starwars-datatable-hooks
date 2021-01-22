import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function SearchTerm() {
  const { searchTermValue, currentTermFilterHandler } = useContext(StarWarsContext);
  return (
    <label htmlFor="search">
      Busca pelo nome:
      <input
        className="form-control"
        data-testid="name-filter"
        type="text"
        name="search"
        id="search"
        onChange={ ({ target: { value } }) => currentTermFilterHandler(value) }
        value={ searchTermValue }
      />
    </label>
  );
}
