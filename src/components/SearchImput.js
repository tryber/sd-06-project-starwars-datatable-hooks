import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchInput() {
  const { name, getFilterName } = useContext(StarWarsContext);

  return (
    <div>
      <label htmlFor="name-filter">
        Digite o nome:
        <input
          name="name-filter"
          data-testid="name-filter"
          type="text"
          onChange={( { target } ) => getFilterName(target.value)}
        />
      </label>
    </div >
  );
}

export default SearchInput;
