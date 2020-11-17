import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchBar() {
  const { filterByName, setFilterName } = useContext(StarWarsContext);

  return (
    <section>
      <label htmlFor="name-filter">
        Filtrar por nome:
        <input
          type="text"
          name="name-filter"
          data-testid="name-filter"
          onChange={ (event) => setFilterName({
            ...filterByName, name: event.target.value.toLowerCase(),
          }) }
        />
      </label>
    </section>
  );
}

export default SearchBar;
