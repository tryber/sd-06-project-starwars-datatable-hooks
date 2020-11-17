import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { searchTerm, setSearchTerm } = useContext(StarWarsContext);
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        id="search-name"
        onChange={ (event) => setSearchTerm(event.target.value) }
        value={ searchTerm }
      />
    </div>
  );
}

export default Filters;
