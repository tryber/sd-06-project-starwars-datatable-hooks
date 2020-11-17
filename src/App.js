import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
    <div className="App">
      App component
    </div>
    </StarWarsProvider>
  );
}

export default App;
