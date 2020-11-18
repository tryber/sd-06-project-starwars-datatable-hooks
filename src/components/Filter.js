import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const { filters, handleChangeValue } = useContext(StarWarsContext);
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ filters.filterByName.name }
        onChange={ (e) => handleChangeValue(e.target.value) }
      />
    </div>
  );
}

export default Filter;
