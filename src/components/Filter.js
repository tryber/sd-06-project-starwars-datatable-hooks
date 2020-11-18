import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const { setNameFilter } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    setNameFilter(target.value);
  };

  return (
    <div>
      <input onChange={ handleChange } type="text" data-testid="name-filter" />
    </div>
  );
}

export default Filter;
