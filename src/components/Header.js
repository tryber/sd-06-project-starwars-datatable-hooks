import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Header() {
  const { setFilterByName } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    setFilterByName({ name: target.value });
  };
  return (
    <div>
      <input type="text" data-testid="name-filter" onChange={ handleChange } />
    </div>
  );
}

export default Header;
