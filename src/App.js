import React, { useContext, useEffect } from 'react';
import StarWarsContext from './context/StarWarsContext';
import './App.css';

function App() {
  const { isFetching, planets, fetchPlanets, setIsFetching } = useContext(StarWarsContext);

  useEffect(() => {
    fetchPlanets();
  }, []);

  // useEffect(() => {
  //   // fetchPlanets();
  //   setIsFetching(false);
  // }, []);

  console.log(planets)

  return (
    <div className="App">
      {!isFetching ? (<p>opa</p>) : <p>Loading...</p>}
    </div>
  );
}

export default App;
