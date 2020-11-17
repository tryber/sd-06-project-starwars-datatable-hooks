import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function SearchTerm() {
  const { searchTermValue, setSearchTermValue } = useContext(StarWarsContext);
  return (
    <label htmlFor="search">
      Busca pelo nome:
      <input
        className="form-control"
        type="text"
        name="search"
        id="search"
        onChange={ ({ target: { value } }) => setSearchTermValue(value) }
        value={ searchTermValue }
      />
    </label>
  );
}
