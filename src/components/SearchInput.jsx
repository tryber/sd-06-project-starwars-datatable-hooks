import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInput() {
  const { searchTerm, setSearchTerm } = useContext(StarWarsContext);
  const { filters: { filterByName: { name } } } = searchTerm;

  function handleInput(value) {
    const objectInput = {
      ...searchTerm,
      filters: { ...searchTerm.filters,
        filterByName: { name: value } },
    };
    setSearchTerm(objectInput);
  }
  return (
    <div className="input-group input-group-sm mb-3">
      <br />
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
      </div>
      <input
        type="text"
        name="search"
        id="search"
        className="form-control"
        data-testid="name-filter"
        onChange={ (ev) => handleInput(ev.target.value) }
        value={ name }
      />
      <br />
    </div>
  );
}

export default SearchInput;
