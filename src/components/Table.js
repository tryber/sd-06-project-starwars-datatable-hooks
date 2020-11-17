import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  return (
    <div>
      <h1>{data}</h1>
      {console.log(data)}
    </div>
  );
}

export default Table;
