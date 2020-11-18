import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInput() {
  const { searchPlanet, setsearchPlanet } = useContext(StarWarsContext);
  return (
    <section>
      <label
        htmlFor="search"
      >
        Filtrar pelo nome do planeta
        <input
          data-testid="name-filter"
          type="text"
          name="search"
          id="search"
          onChange={ (e) => setsearchPlanet(e.target.value) }
          value={ searchPlanet }
        />
      </label>
      <br />
    </section>
  );
}

export default SearchInput;
