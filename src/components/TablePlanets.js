import React, { useEffect, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function TablePlanets() {
  const { planets, requestPlanets } = useContext(StarWarsContext);

  useEffect(() => {
    requestPlanets();
  }, []);

  console.log(planets);

  return (
    <div>
      Hello
    </div>
  );
}

export default TablePlanets;
