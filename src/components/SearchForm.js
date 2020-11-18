import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchForm() {
  const { filters, setFilter } = useContext(StarWarsContext);
  const handleChange = (event) => {
    setFilter({ filterByName: { name: event.target.value } });
  };
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={ filters.filterByName.name }
        onChange={ handleChange }
      />
    </div>
  );
}

export default SearchForm;
