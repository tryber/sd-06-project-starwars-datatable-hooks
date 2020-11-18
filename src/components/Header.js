import React from 'react';
import useFilters from '../hooks/useFilters';

import '../css/Header.css';

function Header() {
  const [filters, setFilters] = useFilters();

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
