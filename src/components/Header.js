import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Header() {
  const { headersTable } = useContext(StarWarsContext);

  return (
    <thead>
      {headersTable.filter((name) => name !== 'residents')
      .map((name) => (
        <th>{name}</th>
      ))}
    </thead>
  );
}

export default Header;
