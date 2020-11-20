import React, { useContext } from 'react';

import StarWarsContext from '../context/StarWarsContext';

function SearchInput() {
  const { filters, setFilters } = useContext(StarWarsContext);
  // const { filterByName } = filters;

  const handleFilters = ({ target: { name, value } }) => {
    setFilters({
      [name]: value,
    });
  };

  return (
    <label htmlFor="filterByName">
      Digite texto:
      <input
        data-testid="name-filter"
        type="text"
        name="filterByName"
        id="filterByName"
        onChange={ (e) => handleFilters(e) }
        value={ filters }
      />
    </label>
  );
}

export default SearchInput;
