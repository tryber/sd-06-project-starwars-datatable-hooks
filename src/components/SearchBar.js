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
      <select data-testid="column-filter">
        <option>Population</option>
        <option>Orbital Period</option>
        <option>Diameter</option>
        <option>Rotation Period</option>
        <option>Surface Water</option>
      </select>
      <select data-testid='comparison-filter'>
        <option>Bigger then</option>
        <option>Smaller then</option>
        <option>Equal of</option>
      </select>
    </section>
  );
}

export default SearchBar;
