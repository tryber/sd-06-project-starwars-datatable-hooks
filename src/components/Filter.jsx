import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const { setFilters } = useContext(StarWarsContext);

  const handleFilters = ({ target: { name, value } }) => {
    setFilters({
      [name]: {
        name: value,
      },
    });
  };

  return (
    <div>
      <input
        name="filterByName"
        type="text"
        data-testid="name-filter"
        onChange={ (e) => handleFilters(e) }
      />
    </div>
  );
}

export default Filter;
