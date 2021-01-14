import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function NameFilterInput() {
  const { filters, setFilters } = useContext(StarWarsContext);
  const { filterByName } = filters;
  return (
    <>
      <input
        type="text"
        value={ filterByName.name }
        data-testid="name-filter"
        onChange={ (e) => setFilters(
          { ...filters, filterByName: { name: e.target.value } },
        ) }
      />
      <button
        type="button"
        onClick={ () => {} }
      >
        filter By name
      </button>
    </>
  );
}

export default NameFilterInput;
