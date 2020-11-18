import React from 'react';
import './App.css';
import NovoTetse from './NovoTeste';
import StarWarsProvider from './StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <div className="App">
        <NovoTetse />
      </div>
    </StarWarsProvider>
  );
}

export default App;
