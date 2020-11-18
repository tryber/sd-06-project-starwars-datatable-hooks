import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Header() {
  const { handleChange } = useContext(PlanetsContext);

  return (
    <div>
      <input onChange={ handleChange } data-testid="name-filter" />
    </div>
  );
}

export default Header;
