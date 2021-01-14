import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function SearchInput() {
  const { search, setSearch } = useContext(StarWarsContext);
  const { filters: { filterByName: { name } } } = search;

  function handleInput(value) {
    const inputValue = {
      ...search,
      filters: { ...search.filters,
        filterByName: { name: value } },
    };
    setSearch(inputValue);
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
        onChange={ (e) => handleInput(e.target.value) }
        value={ name }
      />
      <br />
    </div>
  );
}
