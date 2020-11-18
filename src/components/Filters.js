import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { setFilters } = useContext(StarWarsContext);
  const handleChange = (event) => {
    const { value } = event.target;
    setFilters((prevState) => ({ ...prevState, filterByName: { name: value } }));
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        id="search-name"
        onChange={ handleChange }
      />
    </div>
  );
}

export default Filters;
