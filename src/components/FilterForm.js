import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function FilterForm() {
  const { filters: { filterByName: { name } }, setFilters } = useContext(StarWarsContext);
  const handleNameFilter = ({ target }) => {
    setFilters({ filterByName: { name: target.value } });
  };
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ name }
        onChange={ handleNameFilter }
      />
    </div>
  );
}
