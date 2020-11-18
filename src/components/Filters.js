import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { filters: { filterByName: { name, setName } } } = useContext(StarWarsContext);
  // console.log(useContext(StarWarsContext))
  // console.log('name', name);
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
      />
    </div>
  );
}

export default Filters;
