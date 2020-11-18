import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function MyComponent() {
  const { data, getPlanetsInfo } = useContext(StarWarsContext);
  
  useEffect(() => {
    getPlanetsInfo();
  }, []);
  
  return (
    <div>
      MyComponent
      { console.log(data.results) }
    </div>
  );
}

export default MyComponent;
