import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, getData } = useContext(StarWarsContext);

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>planetas</div>
  )
}

export default Table;
