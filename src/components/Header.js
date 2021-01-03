import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

const Header = () => {
  const { setFilterByName } = useContext(SWContext);

  return (
    <div>
      <label htmlFor="filter">
        Filtro:
        <input
          type="text"
          name="filter"
          data-testid="name-filter"
          onChange={
            (e) => setFilterByName(e.target.value)
          }
        />
      </label>
    </div>
  );
};

export default Header;
