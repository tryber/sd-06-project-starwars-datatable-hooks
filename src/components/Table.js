import React, { useContext } from 'react';
import starWarsContext from '../context/starWarsContext';

function Table() {
  const { planets } = useContext(starWarsContext);
  console.log(planets);
  return (
    <div>
      Data list:
    </div>
  );
}

export default Table;
