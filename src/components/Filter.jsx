import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Filter() {
  const { filters, setFilters } = useContext(StarWarsContext);

  function handleChange(e){
    setFilters({ ...filters, filterByName:{name:e.target.value }})
  };

  return (
    <div>
      <input
        data-testeid="name-filter"
        type="text"
        value={ filters.filterByName.name }
        onChange={ handleChange }
      />
    </div>
  );
}
