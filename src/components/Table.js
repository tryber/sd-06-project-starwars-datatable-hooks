import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { teste } = useContext(StarWarsContext);
  return (
    <div>
      <h1>Table</h1>
      {console.log(teste)}
    </div>
  );
}

export default Table;
