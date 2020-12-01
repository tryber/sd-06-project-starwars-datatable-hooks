import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInput() {
  const { searchTerm, setSearchTerm } = useContext(StarWarsContext);

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
        onChange={ (ev) => setSearchTerm(ev.target.value) }
        value={ searchTerm }
      />
      <br />
    </div>
  );
}

export default SearchInput;
