import React, { useState } from 'react';

const Header = () => {
  const [filterName, setFilterName] = useState('');

  const handleChange = (target) => {
    setFilterName(target.value);
  };

  const handleClick = () => {
    console.log(filterName);
  };

  return (
    <div>
      <label htmlFor="filter">
        Filtro:
        <input
          type="text"
          name="filter"
          data-testid="name-filter"
          onChange={
            (e) => handleChange(e.target)
          }
        />
      </label>
      <button
        type="reset"
        onClick={ handleClick() }
      >
        test
      </button>
    </div>
  );
};

export default Header;
