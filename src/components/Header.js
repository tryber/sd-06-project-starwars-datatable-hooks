import React, { useContext } from 'react';
import starContext from '../context/starContext';
import '../css/Header.css';

function Header() {
  const { filters, setFilters } = useContext(starContext);

  function handleInput({ target }) {
    setFilters({
      ...filters,
      filters: {
        ...filters.filters,
        filterByName: {
          name: target.value,
        },
      },
    });
  }

  return (
    <header className="Header">
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleInput }
      />
    </header>
  );
}

export default Header;
