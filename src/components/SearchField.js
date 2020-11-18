import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchField() {
  const { searchPlanet, setSearchPlanet } = useContext(StarWarsContext);

  return (
    <div>
      <label htmlFor="name-input">
        Search for planet:
        <input
          data-testid="name-filter"
          id="name-input"
          type="text"
          placeholder="name"
          name="planet-name"
          value={ searchPlanet }
          onChange={ (event) => setSearchPlanet(event.target.value) }
        />
      </label>
    </div>
  );
}

export default SearchField;
