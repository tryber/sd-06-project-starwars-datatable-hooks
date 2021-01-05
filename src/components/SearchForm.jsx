import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function SearchForm() {
  const { setFilters } = useContext(StarWarsContext);
  const handleSearch = (event) => {
    setFilters({ filterByName: { name: event.target.value } });
  };
  return (
    <div>
      <span>Busca:</span>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleSearch }
      />
    </div>
  );
}
