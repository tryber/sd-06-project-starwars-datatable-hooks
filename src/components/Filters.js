import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { setFilters } = useContext(StarWarsContext);

  const handleOnChange = (event) => {
    const { value } = event.target;
    setFilters((prevState) => ({ ...prevState, filterByName: { name: value } }));
    // console.log('funcionaOnChange');
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        id="filterByName"
        onChange={ handleOnChange }
      />
    </div>
  );
}

export default Filters;
