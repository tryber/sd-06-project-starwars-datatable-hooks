import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInput() {
  const {
    filters: { filterByName: { name } },
    getFilterByName,
  } = useContext(StarWarsContext);

  return (
    <form>
      <div className="form-group">
        <label
          htmlFor="search"
        >
          Filtro por Nome
          <input
            data-testid="name-filter"
            type="text"
            name="search"
            id="search"
            onChange={ (e) => getFilterByName(e.target.value) }
            value={ name }
            className="form-control"
          />
        </label>
      </div>
    </form>
  );
}

export default SearchInput;
