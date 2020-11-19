import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const { setFilterByName } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    setFilterByName(target.value);
  };
  return (
    <div>
      <input onChange={ handleChange } data-testid="name-filter" />
    </div>
  );
}
export default Filter;
