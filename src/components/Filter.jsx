import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function Filter() {
  const { setName } = useContext(StarWarsContext);
  return (
    <div>
      <label htmlFor="name-filter">
        <span>Filtro por planeta: </span>
        <input
          placeholder="Digite o planeta"
          type="text"
          data-testid="name-filter"
          onChange={ (event) => setName(event.target.value) }
        />
      </label>
    </div>
  );
}

export default Filter;
