import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInputs() {
  const { searchTerm, setSearchTerm } = useContext(StarWarsContext);

  return (
    <header>
      Pesquisa
      <input
        type="text"
        name="search"
        id="search"
        onChange={ (event) => setSearchTerm(event.target.value) }
        value={ searchTerm }
        data-testid="name-filter"
      />
      <select className="form-control form-control-lg">
        <option data-testid="column-filter">population</option>
        <option data-testid="column-filter">orbital_period</option>
        <option data-testid="column-filter">diameter </option>
        <option data-testid="column-filter">rotation_period </option>
        <option data-testid="column-filter">surface_water </option>
        <option data-testid="column-filter">diameter </option>
      </select>
      <select className="form-control form-control-lg">
        <option data-testid="comparison-filter">maior que</option>
        <option data-testid="comparison-filter">menor que</option>
        <option data-testid="comparison-filter">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="search"
        id="search"
        onChange={ (event) => setSearchTerm(event.target.value) }
        value={ searchTerm }
      />
      <button
        type="button"
        onChange={ (event) => setSearchTerm(event.target.value) }
        value={ searchTerm }
        data-testid="button-filter"
      >
        add filter
      </button>
    </header>

  );
}

export default SearchInputs;
