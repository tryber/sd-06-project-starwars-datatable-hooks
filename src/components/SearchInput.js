import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInput() {
  const {
    filters: { filterByName: { name } },
    getFilterByName,
  } = useContext(StarWarsContext);

  return (
    <section>
      <input
        data-testid="name-filter"
        type="text"
        name="search"
        id="search"
        onChange={ (e) => getFilterByName(e.target.value) }
        value={ name }
      />
      <br />
      <br />
    </section>
  );
}

export default SearchInput;
