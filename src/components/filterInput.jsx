import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterInput() {
  const { filters, nameFilter } = useContext(StarWarsContext);
  const { filterByName: { name } } = filters;
  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={ ({ target }) => nameFilter(target.value) }
      value={ name }
    />
  );
}

export default FilterInput;
