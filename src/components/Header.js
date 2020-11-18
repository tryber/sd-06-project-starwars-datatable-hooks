import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Header() {
  const { header } = useContext(StarWarsContext);

  return (
    <tr>
      {header.filter((category) => category !== 'residents')
        .map((element) => (<th key={ element.name }>{element}</th>))}
    </tr>
  );
}

export default Header;
