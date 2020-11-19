import React from 'react';

function Header() {
  return (
    <header className="bg-dark p-2 text-center text-light">
      <h1 className="text-capitalize">
        <span role="img" aria-label="planeta" className="m-sm-4">🪐</span>
        STARWARS DATATABLE
        <span role="img" aria-label="nave" className="m-sm-4">🛸</span>
      </h1>
    </header>
  );
}

export default Header;
