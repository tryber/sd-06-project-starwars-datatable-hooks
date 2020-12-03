import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInputs() {
  const { searchTerm, setSearchTerm } = useContext(StarWarsContext);

  return (
    <header>
      pesquisa1
      <input
        type="text"
        name="search"
        id="search"
        onChange={ (event) => setSearchTerm(event.target.value) }
        value={ searchTerm }
      />
      <select className="form-control form-control-lg">
        <option>Select </option>
        <option>Select </option>
        <option>Select </option>
      </select>
    </header>

  );
}

export default SearchInputs;
