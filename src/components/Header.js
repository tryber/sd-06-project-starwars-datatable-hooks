import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Header() {
  const { headersTable } = useContext(StarWarsContext);

  return (
    <thead>
      <tr>
        {headersTable.filter((name) => name !== 'residents')
          .map((name) => (
            <th key={ name }>{name}</th>
          ))}
      </tr>
    </thead>
  );
}

export default Header;
