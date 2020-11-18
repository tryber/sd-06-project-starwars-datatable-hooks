import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import MyComponent from './components/MyComponent';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <MyComponent />
    </StarWarsProvider>
  );
}

export default App;
