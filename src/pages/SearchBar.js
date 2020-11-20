import React, { useContext } from 'react';
import StarWarsContext from '../context';

function SearchBar() {
  // const { planets } = useContext(StarWarsContext);
  const { setSelectedPlanet } = useContext(StarWarsContext);

  return (
    <div>
      <label htmlFor="search-bar">
        Pesquisar
        <input
          data-testid="name-filter"
          type="text"
          list="list-planets"
          placeholder="Digite o nome de um planeta"
          id="search-bar"
          onChange={ ({ target }) => setSelectedPlanet(target.value) }
        />
      </label>
      {/* <datalist id="list-planets">
        { planets.map((planet, index) => <option key={ index }>{ planet.name }</option>) }
      </datalist> */}
    </div>
  );
}

export default SearchBar;
