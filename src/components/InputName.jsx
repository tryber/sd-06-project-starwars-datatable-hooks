import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputName() {
  const { nameInput, handleName } = useContext(StarWarsContext);

  return (
    <div>
      <label htmlFor="name-filter">
        <input
          type="text"
          data-testid="name-filter"
          id="name-filter"
          placeholder="Search by name"
          onChange={ ({ target }) => handleName(target.value) }
          value={ nameInput.filters.filterByName.name }
        />
      </label>
    </div>
  );
}

export default InputName;
