import React, { useContext } from 'react';
import StarWarsContext from './context/StarWarsContext';
import RequestPlanets from './hooks/RequestPlanets';

function App() {
  RequestPlanets();
  const { data } = useContext(StarWarsContext);
  console.log('data', data);
  return (
    <div>
      ola
    </div>
  );
}

export default App;
