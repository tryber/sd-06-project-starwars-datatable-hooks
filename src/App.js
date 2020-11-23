import React from 'react';
import StarWarsContext from './context/StarWarsContext';
import Home from './pages/home';

function App() {
  return (
    <StarWarsContext>
      <Home />
    </StarWarsContext>
  );
}

export default App;
