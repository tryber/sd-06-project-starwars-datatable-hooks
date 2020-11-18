import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInput() {
  const { searchPlanet, setSearchPlanet } = useContext(StarWarsContext);

  return (
    <input
      type="text"
      name="search"
      id="search"
      onChange={ (e) => setSearchPlanet(e.target.value) }
      value={ searchPlanet }
    />
  );
}

export default SearchInput;
