import React from 'react';
import Provider from './context/Provider';
import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">
        Hola Mundo!
      </div>
    </Provider>
  );
}

export default App;
