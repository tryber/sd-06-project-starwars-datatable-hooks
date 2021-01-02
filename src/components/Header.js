import React from 'react';

const Header = () => {
  return (
    <div>
      <label htmlFor="filter">
        Filtro:
        <input type="text" name="filter" data-testid='name-filter' />
      </label>
    </div>
  )
}

export default Header;