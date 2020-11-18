import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputFilter() {
  const { filters, setFilters } = useContext(StarWarsContext);
  return (
    <label htmlFor="name-filter">
      <input
        data-testid="name-filter"
        id="name-filter"
        type="text"
        onChange={ ({target}) => setFilters({ filterByName: { name: target.value } }) }
        value={ filters.filterByName.name }
        placeholder="Search by Name"
      />
    </label>
  );
}

export default InputFilter;
