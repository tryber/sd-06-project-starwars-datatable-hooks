import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Input() {
  const { name, getFilterName } = useContext(StarWarsContext).context;

  return (
    <div>
      <label htmlFor="name-filter">
        Digite o nome:
        <input
          name="name-filter"
          data-testid="name-filter"
          type="text"
          onChange={({ target }) => getFilterName(target.value)}
        />
      </label>
      <p>{ name }</p>
    </div>
  );
}

export default Input;
